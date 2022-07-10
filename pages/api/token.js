import connectMongo from "../../libs/connectMongo";
import Users from "../../libs/models/users";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        if (req.body.token === "13439812341"){
            let jsonQuery = {
                name : "panitia"
            }

            jsonQuery.token = jwt.sign(jsonQuery, "pemira_secret_banget")

            return res.status(200).json(jsonQuery)
        }

        try {
            await connectMongo();
        } catch (error) {
            console.log(error);
            return res.json({error});
        }

        // find each person with a last name matching 'Ghost'
        const query = await Users.findOneAndUpdate({ token : req.body.token }, {used_token : true, login_at : Date.now()}).exec();

        let jsonQuery = query.toJSON()

        if (jsonQuery.used_token) {
            return res.status(400).json({
                success: false,
                message: 'token sudah terpakai',
                data: null
            });
        }

        jsonQuery.token = jwt.sign(jsonQuery, "pemira_secret_banget")

        res.status(200).json(jsonQuery)
    } else {
        res.status(400).json({
            success: false,
            message: 'only method POST allowed',
            data: null
        });
    }
}
