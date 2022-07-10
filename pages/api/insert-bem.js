import connectMongo from "../../libs/connectMongo";
import CandidateBem from "../../libs/models/bem_candidate";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectMongo();

            await CandidateBem.insertMany(req.body)
        } catch (error) {
            console.log(error);
            res.json({error});
        }

        res.status(200).json("Success")
    } else {
        res.status(400).json({
            success: false,
            message: 'only method POST allowed',
            data: null
        });
    }
}
