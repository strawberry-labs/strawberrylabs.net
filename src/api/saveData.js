import { Timestamp } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

const contactFormSchema = Schema({
    'industry': String,
    'name': String,
    'email': String,
    'phone': String,
    'dateTime': Date,
    'description': String,
    'nda': Boolean
})

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@strawberrylabs.conqfzr.mongodb.net/strawberrylabs?retryWrites=true&w=majority`);

const ContactForm = mongoose.model('contactform', contactFormSchema)

export default async function handler(req, res) {


    const testDoc = new ContactForm(JSON.parse(req.body));
    await testDoc.save()

    res.status(200)

}