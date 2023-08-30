import mongoose, { Schema } from "mongoose";
import { randomUUID } from "crypto";

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@strawberrylabs.conqfzr.mongodb.net/strawberrylabs?retryWrites=true&w=majority`
);

const referrerSchema = Schema({
    referrerId: String,
    orgName: String,
    email: String,
    status: String,
})

const Referrer = mongoose.model('referrer', referrerSchema)

export default async function handler(req, res) {
    let data = JSON.parse(req.body)

    let captcha = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY
        }&response=${data.token}`,
        { method: "POST" }
    )

    let captchaJson = await captcha.json()

    if (captchaJson.success) {
        const referrerId = randomUUID();

        data.referrerId = referrerId
        data.status = "active"

        const doc = new Referrer(data)
        try {
            await doc.save()
        } catch (e) {
            res.status(500).send()
        }

        const referrerLink = `https://strawberrylabs.net?referrerId=${referrerId}`
        res.status(200).json({ referrerLink: referrerLink })
    } else {
        res.status(500).send()
    }


}