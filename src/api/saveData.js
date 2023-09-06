import { Timestamp } from "mongodb";
import mongoose, { Schema } from "mongoose";
import Cookies from 'universal-cookie';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Set the AWS Region.
const REGION = "us-east-1";
// Create SES service object.
const sesClient = new SESClient({ region: REGION });

const contactFormSchema = Schema({
    industry: String,
    name: String,
    email: String,
    phone: String,
    description: String,
    nda: Boolean,
    referrerId: String
});

const createSendEmailCommand = (toAddress, fromAddress) => {
    return new SendEmailCommand({
        Destination: {
            /* required */
            CcAddresses: [
                /* more items */
            ],
            ToAddresses: [
                toAddress,
                /* more To-email addresses */
            ],
        },
        Message: {
            /* required */
            Body: {
                /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: "<h1>Hi</h1> <br><p> This is a test email. Have a nice day. </p><br>Kind regards,<br>Strawberry Labs.",
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "TEXT_FORMAT_BODY",
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Test Email",
            },
        },
        Source: fromAddress,
        ReplyToAddresses: [
            /* more items */
        ],
    });
};

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@strawberrylabs.conqfzr.mongodb.net/strawberrylabs?retryWrites=true&w=majority`
);

const ContactForm = mongoose.model("contactform", contactFormSchema);

const referrerSchema = Schema({
    referrerId: String,
    orgName: String,
    email: String,
    status: String,
})

const Referrer = mongoose.model('referrer', referrerSchema)

const formatReqBody = (data) => {
    return `<b>Industry:</b> ${data.industry} %0A
<b>Name:</b> ${data.name} %0A
<b>Email:</b> ${data.email} %0A
<b>Phone:</b> ${data.phone} %0A
<b>Description:</b> ${data.description} %0A
<b>NDA:</b> ${data.nda} %0A
<b>Referrer Organization:</b> ${data.referrerOrganizationName} %0A
<b>Referrer Email:</b> ${data.referrerEmail}
`;
};

export default async function handler(req, res) {

    const cookies = new Cookies(req.headers.cookie);

    let { token, ...data } = JSON.parse(req.body)

    let telegramData = data;

    let captcha = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY
        }&response=${token}`,
        { method: "POST" }
    )

    let captchaJson = await captcha.json()

    if (captchaJson.success) {
        const doc = new ContactForm(data);

        if (cookies.get("referrerId") != null) {
            //validate referrerId first
            let refId = cookies.get("referrerId")
            let referrer = await Referrer.findOne({ referrerId: refId }).exec()
            console.log(`refId: ${refId}`)
            console.log(`referrer: ${JSON.stringify(referrer)}`)

            if (referrer != null) {
                doc.referrerId = refId
                telegramData.referrerOrganizationName = referrer.orgName
                telegramData.referrerEmail = referrer.email
            }
        }

        try {
            await doc.save();
        }
        catch (e) {
            res.status(500).send({ "Error": "Error with database" })
        }

        fetch(
            `https://api.telegram.org/bot6299109900:AAGV5zW_i6N39cYlvEx0Y2i-hK7tNE_vcPk/sendMessage?chat_id=-845129458&text=${formatReqBody(
                telegramData
            )}&parse_mode=HTML`,
            {
                method: "POST",
            }
        ).then((response) => console.log(response));

        const sendEmailCommand = createSendEmailCommand(
            "shriramsekar11@gmail.com",
            "notification@strawberrylabs.net"
        );

        try {
            return await sesClient.send(sendEmailCommand);
            console.log("done");
        } catch (e) {
            console.log()
        }

        res.status(200).send();
    } else {
        res.status(500).send({
            "Error": "Captcha error",
            ...captchaJson
        });
    }
}
