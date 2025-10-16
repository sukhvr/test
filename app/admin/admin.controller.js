const Admin = require('../../model/admin.model')
const jwt = require('jsonwebtoken')

async function login(req, res, next) {
    try {
        const { name, password } = req.body;

        const admin = await Admin.findOne({name:name, password:password})
        if (!admin) {
            return res.status(200).json({ message: "Unauthorized Admin" })
        }
        if (admin.name == name && admin.password == password) {
            const token = jwt.sign({ id: admin._id }, '123', { expiresIn: '1h' });
            console.log("token", token)
            return res.status(200).send({ token })

        }

    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }

}

module.exports = login;