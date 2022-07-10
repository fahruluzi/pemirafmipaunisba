import emailData from "../../libs/email.json"
import connectMongo from "../../libs/connectMongo";
import Users from "../../libs/models/users";

export default async function handler(req, res) {
    if (req.method === "POST") {
        let result;
        try {
            await connectMongo();

            let users = []
            let tokens = []
            let emails = []

            for (const data of emailData) {
                let npm = data.npm
                let major = data.major
                let checkMajor = npm.slice(0,6);
                if (checkMajor === "100601") {
                    major = "statistika"
                } else if (checkMajor === "100602") {
                    major = "farmasi"
                } else if (checkMajor === "100603") {
                    major = "matematika"
                }

                let token = uniqueRandomNumber(tokens)


                let email = data.email
                if (emails.includes(data.email)) {
                    continue;
                } else {
                    emails.push(email);
                }

                users.push({
                    "name" : data.name,
                    "npm" : npm,
                    "major" : major,
                    "year" : data.year,
                    "class" : data.class,
                    "email" : email,
                    "token" : token
                })
            }
            
            result = await Users.insertMany(users);
        } catch (error) {
            console.log(error);
            res.json({ error });
        }

        res.status(200).json(result)
    } else {
        res.status(400).json({
            success: false,
            message: 'only method POST allowed',
            data: null
        });
    }
}

function uniqueRandomNumber(tokens){
    let token = Math.floor(100000 + Math.random() * 900000)
    if (tokens.includes(token)) {
        return uniqueRandomNumber(tokens)
    } else {
        tokens.push(token)
        return token
    }
}
