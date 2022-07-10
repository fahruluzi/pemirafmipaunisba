import nodemailer from 'nodemailer';

export default function handler(req, res) {
    if(req.method === 'POST') {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'fahrulf594@gmail.com',
                pass: 'rpjplmvvhbwqbhte' // naturally, replace both with your real credentials or an application-specific password
            }
        });

        const mailOptions = {
            from: '<noreply> no-reply@bppufmipaunisba.com',
            to: 'langitkode@gmail.com, fahrul.fauz@gmail.com',
            subject: 'Token PEMIRA FMIPA UNISBA 2022',
            text: 'Dudes, we really need your money.'
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(200).end(JSON.stringify({message: 'Send Mail'}))
    } else {
        res.status(400).json({
            success: false,
            message: 'only method POST allowed',
            data: null
        });
    }
}
