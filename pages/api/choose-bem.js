import connectMongo from "../../libs/connectMongo";
import User from "../../libs/models/users";

export default async function handler(req, res) {
    if (req.method === 'POST') {

        try {
            await connectMongo();
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: 'Error Connection',
                data: {error}
            });
        }

        let result = {}
        try {
            result = await User.updateOne({email: req.body.email}, {
                $set: {
                    candidate_bem: {
                        lead_name: req.body.lead_name,
                        lead_npm: req.body.lead_npm,
                        co_lead_name: req.body.co_lead_name,
                        co_lead_npm: req.body.co_lead_npm,
                        number: req.body.number
                    }
                }
            }, {upsert : true}).exec()
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error insert',
                data: error
            });
        }

        return res.status(200).json(result)
    } else {
        return res.status(400).json({
            success: false,
            message: 'only method POST allowed',
            data: null
        });
    }
}
