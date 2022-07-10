import styles from '../styles/Bem.module.scss';
import Image from "next/image";
import {useState} from "react";
import Head from "next/head";

const Bem = () => {
    const candidate = [
        {
            lead_name: "Rizky Setiawan",
            lead_npm: 0,
            co_lead_name: "Muhammad Ilham F",
            co_lead_npm: 0,
            number: 1
        }
    ]

    const [choose, setChoose] = useState(99)

    const chooseHandler = (index) => {
        if (index === choose) {
            setChoose(99);
        } else {
            setChoose(index);
        }
    }

    const[warning, setWarning] = useState(false)
    const toogleWarning = () => {
        setWarning(!warning)
    }

    const[alert, setAlert] = useState(false)
    const toogleAlert = () => {
        setAlert(!alert)
    }

    const [data, setData] = useState(null);

    const handleShowWarning = () => {
        if (choose !== 99) {
            setData(candidate[choose])
            toogleWarning()
        } else {
            setData({
                name : "Pilih Kandidat terlebih dahulu"
            })
            toogleAlert()
        }
    }

    const handleSubmit = () => {
        console.log(choose, major)
        toogleWarning()
    }

    return (
        <>
            <Head>
                <title>PEMIRA FMIPA UNISBA</title>
                <link rel="icon" href="/bppu.png" />
            </Head>

            <div id="popup-modal-alert" tabIndex="-1"
                 className={`${!alert && "hidden"} overflow-y-auto overflow-x-auto fixed min-h-full min-w-full z-50 md:inset-0 h-modal md:h-full`}>
                <div className="relative p-4 w-full mx-auto my-auto max-w-md min-h-full md:h-auto">
                    <div className="relative bg-white mx-auto my-auto mt-40 rounded-lg shadow dark:bg-gray-700">
                        <button type="button" onClick={toogleAlert}
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-toggle="popup-modal">
                            <svg className="w-5 h-5" fill="red" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <div className="p-6 text-center">
                            <svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none"
                                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Pilih terlebih
                                dahulu kandidat</h3>

                            <button data-modal-toggle="popup-modal" type="button" onClick={toogleAlert}
                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                Oke
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="popup-modal-warning" tabIndex="-1"
                 className={`${!warning && "hidden"} overflow-y-auto overflow-x-auto fixed min-h-full min-w-full z-50 md:inset-0 h-modal md:h-full`}>
                <div className="relative p-4 w-full mx-auto my-auto max-w-md min-h-full md:h-auto">
                    <div className="relative bg-white mx-auto my-auto mt-40 rounded-lg shadow dark:bg-gray-700">
                        <button type="button" onClick={toogleWarning}
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-toggle="popup-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <div className="p-6 text-center">
                            <svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none"
                                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Sudah yakin
                                memilih {data && data.lead_name} dan {data && data.co_lead_name}?</h3>
                            <button data-modal-toggle="popup-modal" type="button" onClick={handleSubmit}
                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Pilih
                            </button>
                            <button data-modal-toggle="popup-modal" type="button" onClick={toogleWarning}
                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={styles["landing-container-bem"]}>
                <div className="">
                <span
                    className={styles["landing-container-bem-title"]}>KETUA DAN WAKIL KETUA BADAN EKSEKUTIF MAHASISWA</span>
                    <span className={styles["landing-container-bem-title"]}>FMIPA UNISBA</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-evenly mt-2 font-poppins">
                    <div
                        className={`cursor-pointer flex-col bg-card w-fit sm:w-96 min-h-full rounded-xl px-3 pt-3 pb-5 ${choose === 0 && "shadow-choose"}`}
                        onClick={() => chooseHandler(0)}>
                        <div className="flex justify-between">
                            <Image className="rounded-l-xl" src={"/bem/ketua.png"} width={175} height={150}
                                   alt={"ketua"} objectFit={"cover"}
                                   objectPosition={"top"}/>
                            <div className="flex-col justify-between mr-auto mt-auto mb-auto ml-4 text-left">
                                <span className="font-semibold text-lg block">KETUA</span>
                                <span className="font-medium text-sm block">Rizky Setiawan</span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex-col justify-between mr-auto mt-auto mb-auto ml-4 text-left">
                                <span className="font-semibold text-lg block">WAKIL KETUA</span>
                                <span className="font-medium text-sm block">Muhammad Ilham F</span>
                            </div>
                            <Image className="rounded-r-xl" src={"/bem/wakil.png"} width={175} height={150}
                                   alt={"ketua"} objectFit={"cover"}
                                   objectPosition={"top"}/>
                        </div>
                        <div className="text-left">
                            <span className="font-medium text-sm block">VISI</span>
                            <span className="text-justify text-xs">Mewujudkan BEM-F MIPA Unisba Yang Bersinergi Dalam Mewujudkan Misi
                            Bersama, Unggul, Berkualitas, Aspiratif..</span>
                        </div>

                        <div className="border-t-2 border-t-gray-400 mt-2 text-right flex justify-between">
                            <span className="text-sm font-bold block mt-2">Nomor Urut 1</span>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={handleShowWarning}
                        className="mt-2 mx-auto text-white w-full md:w-72 bg-primary hover:bg-primary-darker focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none">
                    Pilih
                </button>
            </div>
        </>
    )
}

export default Bem;
