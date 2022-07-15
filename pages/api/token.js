import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        if (req.body.token === "13439812341"){
            let jsonQuery = {
                name : "panitia"
            }

            jsonQuery.token = jwt.sign(jsonQuery, "pemira_secret_banget")

            return res.status(200).json(jsonQuery)
        } else {
            return res.status(400).json({
                success: false,
                message: 'pemilihan sudah selesai dilaksanakan',
                data: null
            });
        }
    } else {
        res.status(400).json({
            success: false,
            message: 'only method POST allowed',
            data: null
        });
    }
}
