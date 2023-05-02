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
    'dateTime': Date,
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

export default async function handler(req, res) {

    /*
    const doc = new ContactForm(JSON.parse(req.body));
    await doc.save()
    */
    const sendEmailCommand = createSendEmailCommand(
        "hi@chiragasarpota.com",
        "notification@strawberrylabs.net"
    );

    try {
        return await sesClient.send(sendEmailCommand);
        console.log('done')
    } catch (e) {
        console.error("Failed to send email.");
        console.error(e)
        return e;
    }

    res.status(200)

}