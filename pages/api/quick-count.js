import connectMongo from "../../libs/connectMongo";
import Users from "../../libs/models/users";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await connectMongo();
        } catch (error) {
            console.log(error);
            return res.json({error});
        }

        // BEM
        let bemresult = 0
        let allChoosed = 0
        let allUser = 0

        // HIMASTA
        let himasta1 = 0
        let himasta2 = 0
        let himasta3 = 0
        let himastaChoosed = 0
        let himastaAll = 0

        // HIMATIKA
        let himatika1 = 0
        let himatikaChoosed = 0
        let himatikaAll = 0

        // HIMAFAR
        let himafar1 = 0
        let himafar2 = 0
        let himafarChoosed = 0
        let himafarAll = 0

        try {
            // BEM
            bemresult = await Users.countDocuments({"candidate_bem.lead_name" : "Rizky Setiawan"}).exec();
            allChoosed = await Users.countDocuments({used_token : true}).exec();
            allUser = await Users.countDocuments().exec();

            // HIMASTA
            himasta1 = await Users.countDocuments({"candidate.name" : "Trianto Syahbannu P", major : "statistika"}).exec();
            himasta2 = await Users.countDocuments({"candidate.name" : "M Fariz Faqih", major : "statistika"}).exec();
            himasta3 = await Users.countDocuments({"candidate.name" : "M. Farhan Praja U", major : "statistika"}).exec();
            himastaChoosed = await Users.countDocuments({used_token : true, major : "statistika"}).exec();
            himastaAll = await Users.countDocuments({major : "statistika"}).exec();

            // HIMATIKA
            himatika1 = await Users.countDocuments({"candidate.name" : "Dieva Gheamelia", major : "matematika"}).exec();
            himatikaChoosed = await Users.countDocuments({used_token : true, major : "matematika"}).exec();
            himatikaAll = await Users.countDocuments({major : "matematika"}).exec();

            // HIMAFAR
            himafar1 = await Users.countDocuments({"candidate.name" : "Jahra Farhanuddin", major : "farmasi"}).exec();
            himafar2 = await Users.countDocuments({"candidate.name" : "M. Ariq Akhsyal", major : "farmasi"}).exec();
            himafarChoosed = await Users.countDocuments({used_token : true, major : "farmasi"}).exec();
            himafarAll = await Users.countDocuments({major : "farmasi"}).exec();
        } catch (e) {
            console.log(e)
        }

        let data = {
            bem1_count : ((bemresult/allChoosed) * 100 || 0).toFixed(2),
            bem_choosed : ((allChoosed/allUser) * 100).toFixed(2),
            himasta1_count : ((himasta1/(himasta1 + himasta2 + himasta3)) * 100 || 0).toFixed(2),
            himasta2_count : ((himasta2/(himasta1 + himasta2 + himasta3)) * 100 || 0).toFixed(2),
            himasta3_count : ((himasta3/(himasta1 + himasta2 + himasta3)) * 100 || 0).toFixed(2),
            himasta_choosed : ((himastaChoosed/himastaAll) * 100).toFixed(2),
            himatika1_count : ((himatika1/himatikaChoosed) * 100 || 0).toFixed(2),
            himatika_choosed : ((himatikaChoosed/himatikaAll) * 100).toFixed(2),
            himafar1_count : ((himafar1/(himafar1 + himafar2)) * 100 || 0).toFixed(2),
            himafar2_count : ((himafar2/(himafar1 + himafar2)) * 100 || 0).toFixed(2),
            himafar_choosed : ((himafarChoosed/himafarAll) * 100).toFixed(2),
        }

        res.status(200).json({
            bemresult,
            allChoosed,
            allUser,
            himasta1,
            himasta2,
            himasta3,
            himastaChoosed,
            himastaAll,
            himatika1,
            himatikaChoosed,
            himatikaAll,
            himafar1,
            himafar2,
            himafarChoosed,
            himafarAll,
            data
        })
    } else {
        res.status(400).json({
            success: false,
            message: 'only method GET allowed',
            data: null
        });
    }
}
