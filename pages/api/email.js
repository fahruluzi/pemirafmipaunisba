import connectMongo from "../../libs/connectMongo";
import Users from "../../libs/models/users";
import axios from "axios";

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const major = req.body.major;

        try {
            await connectMongo();
        } catch (error) {
            console.log(error);
            res.json({error});
        }

        const query = await Users.find({ major : major }, {email : 1, token : 1}).limit(150).exec();

        query.push(
            {
                email : "langitkode@gmail.com",
                token : "TERAKHIR"
            }
        )

        let count = 1;

        let emaillog = []

        for (const queryElement of query) {
            let data = JSON.stringify({
                "sender": {
                    "name": "No Reply",
                    "email": "no-reply@bppufmipaunisba.com"
                },
                "to": [
                    {
                        "email": queryElement.email,
                    }
                ],
                "subject": "Token PEMIRA FMIPA UNISBA 2022",
                "htmlContent": "TOKEN : " + queryElement.token.toString()
            });

            let config = {
                method: 'post',
                url: 'https://api.sendinblue.com/v3/smtp/email',
                headers: {
                    'accept': 'application/json',
                    'api-key': 'HEHEH',
                    'content-type': 'application/json'
                },
                data : data
            };

            axios(config)
                .then(function (response) {
                    console.log(count++, queryElement.email, JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(count++, queryElement.email, error);
                });

            emaillog.push(queryElement.email)
        }

        res.status(200).json({email : emaillog, query : query})
    } else {
        res.status(400).json({
            success: false,
            message: 'only method POST allowed',
            data: null
        });
    }
}
