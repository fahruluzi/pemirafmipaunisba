import styles from '../styles/Login.module.scss';
import Image from "next/image";
import {useState} from "react";
import Head from "next/head";
import axios from "axios";
import {useRouter} from "next/router";

const Login = () => {
    const router = useRouter()
    const [token, setToken] = useState("");

    const handleSubmit = async () => {
        let res
        try {
            res = await axios.post(`/api/token`, {
                token: token,
            });
        } catch (e) {
            console.log(e)
        }

        if(res && res.data && res.data.token  && res.data.token !== ""){
            localStorage.setItem("token", res.data.token)

            delete res.data.token
            localStorage.setItem("user", JSON.stringify(res.data))

            if (res.data.name && res.data.name === "panitia"){
                router.push("/quick-count")
            }else {
                router.push("/bem")
            }
        } else {
            alert("token sudah digunakan")
        }
    }

    return (
        <>
            <Head>
                <title>PEMIRA FMIPA UNISBA</title>
                <link rel="icon" href="/bppu.png" />
            </Head>

            <div
                className={styles["landing-container-login"]}>
                <div className="mx-auto my-auto flex-col bg-white w-fit sm:w-96 rounded-xl px-8 py-10 text-center">
                    <div className="flex justify-center">
                        <Image height={50} width={70} src={"/logo-fmipa.png"} alt={"logo"}></Image>
                        <span className="font-semibold font-poppins text-2xl sm:text-3xl block my-auto ml-2">PEMIRA</span>
                    </div>

                    <label className="block text-left mt-6">
                        <span className="block text-sm font-medium text-slate-700">
                            Token
                          </span>
                        <input type="text" name="token" value={token} onChange={e => setToken(e.target.value)}
                               className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                               placeholder="000000"/>
                    </label>

                    <button type="button" onClick={handleSubmit}
                            className="mt-6 text-white bg-primary hover:bg-primary-darker focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Masuk
                    </button>

                    <p className="mt-10 font-poppins text-xs text-left">*token sudah dikirim oleh sistem ke alamat email masing-masing pemilih</p>
                </div>
            </div>
        </>
    )
}

export default Login;
