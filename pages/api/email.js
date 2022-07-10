import nodemailer from 'nodemailer';
import connectMongo from "../../libs/connectMongo";
import Users from "../../libs/models/users";

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const major = req.body.major;

        try {
            await connectMongo();
        } catch (error) {
            console.log(error);
            res.json({error});
        }

        // find each person with a last name matching 'Ghost'
        // const query = await Users.find({major : major}, {email: 1, token : 1}).exec();

        // let jsonQuery = query.toJSON()

        let query = []

        for (let i = 0; i < 200; i++) {
            query.push({
                email : "langitkode@gmail.com",
                token : "testing banyak :)"
            })
        }

        query.push({
            email : "langitkode@gmail.com",
            token : "testing banyak :)"
        })


        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'fahrul.fauz@gmail.com',
                pass: 'vjieafilqeervwod' // naturally, replace both with your real credentials or an application-specific password
            }
        });

        let count = 1;
        for (const queryElement of query) {
            const mailOptions = {
                from: '<noreply> no-reply@bppufmipaunisba.com',
                to: queryElement.email,
                subject: 'Token PEMIRA FMIPA UNISBA 2022',
                text: `Token : ${queryElement.token.toString()}`
            };

            count++
            console.log(count)

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }

        res.status(200).json(query)
    } else {
        res.status(400).json({
            success: false,
            message: 'only method POST allowed',
            data: null
        });
    }
}
