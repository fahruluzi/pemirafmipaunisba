import connectMongo from "../../libs/connectMongo";
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

        const query = [];

        query.push(
            {
                email : "resanoelsa021@gmail.com",
                token : "844589"
            },
            {
                email : "suusi0601@gmail.com",
                token : "167260"
            },
            {
                email : "langitkode@gmail.com",
                token : "TERAKHIR"
            }
        )

        let count = 1;

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
                    'api-key': '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',
                    'content-type': 'application/json'
                },
                data : data
            };

            axios(config)
                .then(function (response) {
                    console.log(count++, JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(count++, error);
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
