const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sukhvr13@gmail.com',
        pass: 'wnlwghrhkknlnevt'
    }
});

transporter.verify();
console.log("server is ready to transport email ");

function sendMail(to, subject, htmlcontent) {
    const mailOptions = {
        from: 'sukhvr13@gmail.com',
        to : to,
        cc:'daljeetjandu13@gmail.com',
        bcc:'admin@gmail.com',
        subject :subject,
        html:htmlcontent
    };

    return transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
