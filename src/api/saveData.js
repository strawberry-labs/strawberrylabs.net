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

const formatReqBody = (data) => {
    return `<b>industry:</b> ${data.industry} %0A
<b>name:</b> ${data.name} %0A
<b>email:</b> ${data.email} %0A
<b>phone:</b> ${data.phone} %0A
<b>description:</b> ${data.description} %0A
<b>nda:</b> ${data.nda}
`;
};

export default async function handler(req, res) {

    const cookies = new Cookies(req.headers.cookie);

    let { token, ...data } = JSON.parse(req.body)

    fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY
        }&response=${token}`,
        { method: "POST" }
    ).then((response) => response.json().then((r) => console.log(r)))
        .catch((err) => console.log(err))

    const doc = new ContactForm({});

    if (cookies.get("referrerId") != null)
        doc.referrerId = cookies.get("referrerId")

    try {
        await doc.save(data);
    }
    catch (e) {
        console.log(e)
    }

    /*
    fetch(
        `https://api.telegram.org/bot6299109900:AAGV5zW_i6N39cYlvEx0Y2i-hK7tNE_vcPk/sendMessage?chat_id=-845129458&text=${formatReqBody(
            data
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
        console.error("Failed to send email.");
        console.error(e);
    }
*/
    res.status(200).send();
}
