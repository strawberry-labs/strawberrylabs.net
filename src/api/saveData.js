import { Timestamp } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Set the AWS Region.
const REGION = "us-east-1";
// Create SES service object.
const sesClient = new SESClient({ region: REGION });

const contactFormSchema = Schema({
    'industry': String,
    'name': String,
    'email': String,
    'phone': String,
    'description': String,
    'nda': Boolean
})

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

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@strawberrylabs.conqfzr.mongodb.net/strawberrylabs?retryWrites=true&w=majority`);

const ContactForm = mongoose.model('contactform', contactFormSchema)

const formatReqBody = (reqBody) => {
    let reqJSON = JSON.parse(reqBody)
    return (
        `<b>industry:</b> ${reqJSON.industry} %0A
<b>name:</b> ${reqJSON.name} %0A
<b>email:</b> ${reqJSON.email} %0A
<b>phone:</b> ${reqJSON.phone} %0A
<b>description:</b> ${reqJSON.description} %0A
<b>nda:</b> ${reqJSON.nda}
`
    )
}

export default async function handler(req, res) {

    console.log(JSON.parse(req.body))
    console.log(JSON.parse(req.body).token)
    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=6Lfoie0lAAAAAMS_0EzYmtVx_e3VmnDFNi2jLKEg&response=${JSON.parse(req.body).token}`, { method: "POST" })
        .then((response) => response.json().then((r) => console.log(r)))

    const doc = new ContactForm(JSON.parse(req.body));
    await doc.save()

    fetch(`https://api.telegram.org/bot6299109900:AAGV5zW_i6N39cYlvEx0Y2i-hK7tNE_vcPk/sendMessage?chat_id=-845129458&text=${formatReqBody(req.body)}&parse_mode=HTML`, {
        method: "POST"
    }).then((response) => console.log(response))

    const sendEmailCommand = createSendEmailCommand(
        "shriramsekar11@gmail.com",
        "notification@strawberrylabs.net"
    );

    try {
        return await sesClient.send(sendEmailCommand);
        console.log('done')
    } catch (e) {
        console.error("Failed to send email.");
        console.error(e)
    }

    res.status(200)

}