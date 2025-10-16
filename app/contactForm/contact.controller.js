const { validationResult } = require('express-validator')
const { sendMail } = require("../../helper/mailservice");
const Contact = require('../../model/contact.model')

async function addContact(req, res, next) {
    try {
        const { name, email, subject, message, cc, bcc } = req.body;
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }
        const emailExists = await Contact.findOne({ email: email });
        if (emailExists) {
            return res.status(400).send({ message: "Email already exists" })
        }
        const newcontact = await Contact.create({
            name,
            email,
            subject,
            message
        })
        await sendMail(email, "Thank you for contacting us",
            `<h1>Hello ${name},</h1><p>Thank You!</p>`, cc, bcc);
        console.log("Added=>", newcontact);
        return res.status(201).json({ message: `${name} added to contact list`, newcontact })
    }
    catch (err) {
        return res.status(400).json({ error: err.message })
    }

}
async function contactList(req, res) {
    try {
        const list = await Contact.find()
        return res.status(200).json({ message: "Contact list", data: list })

    }
    catch (err) {
        return res.status.json({ error: err.message })
    }
}

module.exports = { addContact, contactList }