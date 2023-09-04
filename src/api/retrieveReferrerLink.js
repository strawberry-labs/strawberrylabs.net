import mongoose, { Schema } from "mongoose";

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

    let captcha = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY
        }&response=${data.token}`,
        { method: "POST" }
    )

    let captchaJson = await captcha.json()

    if (captchaJson.success) {
        try {
            let links = await Referrer.find({ email: data.retrieveEmail }).exec()
            //return link
            res.status(200).json(links)
        } catch (e) {
            res.status(500).send({ "Error": "Error with database" })
        }

    } else {
        res.status(500).send({ "Error": "captcha error" })
    }


}