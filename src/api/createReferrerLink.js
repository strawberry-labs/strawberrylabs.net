import mongoose, { Schema } from "mongoose";
import { randomUUID } from "crypto";

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@strawberrylabs.conqfzr.mongodb.net/strawberrylabs?retryWrites=true&w=majority`
);

const referrerSchema = Schema({
    referrerId: String,
    organizationName: String,
    email: String,
    status: String,
})

const Referrer = mongoose.model('referrer', referrerSchema)

export default async function handler(req, res) {
    let data = JSON.parse(req.body)

    fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY
        }&response=${data.token}`,
        { method: "POST" }
    ).then((response) => response.json().then((r) => console.log(r)));

    const referrerId = randomUUID();

    data.referrerId = referrerId
    data.status = "active"

    const doc = new Referrer(data)
    await doc.save()

    const referrerLink = `https://strawberrylabs.net?referrerId=${referrerId}`
    res.status(200).json({ referrerLink: referrerLink })
}