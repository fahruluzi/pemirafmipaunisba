import {SMTPClient} from 'emailjs';

export default function handler(req, res) {
    // const {email} = req.body;
    // // console.log(process.env)

    const client = new SMTPClient({
        user: "cocakunku52@gmail.com",
        password: "Fahrul10",
        host: 'smtp.gmail.com',
        ssl: true
    });

    try {
        client.send(
            {
                text: `Just for testing purpose`,
                from: "fahrulf594@gmail.com",
                to: "fahrul.fauz@gmail.com",
                subject: 'testing emailjs',
            }
        )
    } catch (e) {
        res.status(400).end(JSON.stringify({message: "Error"}))
        return;
    }

    res.status(200).end(JSON.stringify({message: 'Send Mail'}))
}
