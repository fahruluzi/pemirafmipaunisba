import styles from '../styles/Hima.module.scss';
import Image from "next/image";
import {useEffect, useState} from "react";
import Head from "next/head";
import jwt from "jsonwebtoken";
import {useRouter} from "next/router";
import axios from "axios";

const Himasta = () => {
    const router = useRouter()

    const [major, setMajor] = useState(null) // statistika, matematika, farmasi
    const [idxtitle, setIdxtitle] = useState(null) // 0 = statistika, 1 = matematika, 2 = farmasi

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
            try {
                const token = localStorage.getItem('token');
                if (token === "") {
                    router.push('/login');
                } else {
                    const verified = jwt.verify(token, "pemira_secret_banget");
                    setMajor(verified.major)
                    if (major === "statistika") {
                        setIdxtitle(0)
                    } else if (major === "matematika") {
                        setIdxtitle(1)
                    } else if (major === "farmasi"){
                        setIdxtitle(2)
                    }

                    if (!verified){
                        router.push('/login');
                    }

                    if (verified.name === "panitia") {
                        router.push('/quick-count');
                    }
                }
            } catch (error) {
                router.push('/login');
            }
        }
        ,
        [router, major, idxtitle]
    )

    const title = [
        "HIMPUNAN MAHASISWA STATISTIKA",
        "HIMPUNAN MAHASISWA MATEMATIKA",
        "HIMPUNAN MAHASISWA FARMASI"
    ]

    const candidate_statistika = [
        {
            name: "Trianto Syahbannu P",
            npm: 10060120002,
            number: 1
        },
        {
            name: "M Fariz Faqih",
            npm: 0,
            number: 2
        },
        {
            name: "M. Farhan Praja U",
            npm: 10060120073,
            number: 3
        }
    ]

    const candidate_matematika = [
        {
            name: "Dieva Gheamelia",
            npm: 0,
            number: 1
        },
    ]

    const candidate_farmasi = [
        {
            name: "Jahra Farhanuddin",
            npm: 0,
            number: 1
        },
        {
            name: "M. Ariq Akhsyal",
            npm: 0,
            number: 2
        },
    ]

    const [choose, setChoose] = useState(99)

    const chooseHandler = (index) => {
        if (index === choose) {
            setChoose(99)
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

        if (data.name === "Terimakasih telah berpartisipasi dalam kegiatan PEMIRA FMIPA 2022") {
            router.push("/")
            localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
    }

    const [data, setData] = useState(null);

    const handleShowWarning = () => {
        if (major === "statistika" && choose !== 99) {
            setData(candidate_statistika[choose])
            toogleWarning()
        } else if (major === "matematika" && choose !== 99) {
            setData(candidate_matematika[choose])
            toogleWarning()
        } else if (major === "farmasi" && choose !== 99) {
            setData(candidate_farmasi[choose])
            toogleWarning()
        } else {
            setData({
                name : "Pilih Kandidat terlebih dahulu"
            })
            toogleAlert()
        }
    }

    const handleSubmit = async () => {
        toogleWarning()
        data.major = major

        let user = JSON.parse(localStorage.getItem("user"))
        data.email = user.email

        console.log(data)

        const res = await axios.post(`/api/choose-candidate`, data);

        if (res.status === 200) {
            setData({
                name : "Terimakasih telah berpartisipasi dalam kegiatan PEMIRA FMIPA 2022"
            })
            toogleAlert()
        } else {
            console.log(JSON.stringify(res.data))
        }
    }

    return (<>
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
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{data && data.name}</h3>

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
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Sudah yakin memilih {data && data.name}?</h3>
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
                className={styles["landing-container-hima"]}>

                <div className="">
                <span
                    className={styles["landing-container-hima-title"]}>KETUA UMUM {title[idxtitle]}</span>
                    <span className={styles["landing-container-hima-title"]}>FMIPA UNISBA</span>
                </div>
                {major === "statistika" &&
                    <div className="flex flex-col md:flex-row justify-evenly mt-2 font-poppins">
                        <div
                            className={`cursor-pointer flex-col bg-card w-fit sm:w-96 min-h-full rounded-xl px-3 pt-3 pb-5 ${choose === 0 && "shadow-choose"}`}
                            onClick={() => chooseHandler(0)}>
                            <div className="flex justify-between">
                                <Image className="rounded-l-xl" src={"/himasta/ketua1.png"} width={175} height={150}
                                       alt={"ketua"} objectFit={"cover"}
                                       objectPosition={"top"}/>
                                <div className="flex-col justify-between mr-auto mt-auto mb-auto ml-4 text-left">
                                    <span className="font-semibold text-lg block">KETUA</span>
                                    <span className="font-medium text-sm block">Trianto Syahbannu P</span>
                                    <span className="font-medium text-sm block">10060120002</span>
                                </div>
                            </div>
                            <div className="text-left mt-4">
                                <span className="font-medium text-sm block">VISI</span>
                                <p className="text-xs">Menjadikan himpunan mahasiswa statistika unisba sebagai tempat
                                    untuk mengembangkan potensi
                                    minat bakat khususnya mahasiswa aktif..</p>
                            </div>
                            <div className="text-left mt-5">
                                <span className="font-medium text-sm block">PROGRAM UNGGULAN</span>
                                <ul className="text-xs mt-3">
                                    <li>- Database Bidang Minat Dan Bakat</li>
                                    <li>- FESTA Unisba (Festival Statistika Unisba)</li>
                                </ul>
                            </div>
                            <div className="border-t-2 border-t-gray-400 mt-2 text-right flex justify-between">
                                <span className="text-sm font-bold block mt-2">Nomor Urut 1</span>
                                {/*<span*/}
                                {/*    className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
                            </div>
                        </div>
                        <div
                            className={`cursor-pointer flex-col bg-card w-fit sm:w-96 min-h-full rounded-xl px-3 pt-3 pb-5 ${choose === 1 && "shadow-choose"}`}
                            onClick={() => chooseHandler(1)}>
                            <div className="flex justify-between">
                                <Image className="rounded-l-xl" src={"/himasta/ketua2.jpg"} width={175} height={150}
                                       alt={"ketua"} objectFit={"cover"}
                                       objectPosition={"top"}/>
                                <div className="flex-col justify-between mr-auto mt-auto mb-auto ml-4 text-left">
                                    <span className="font-semibold text-lg block">KETUA</span>
                                    <span className="font-medium text-sm block">M Fariz Faqih</span>
                                </div>
                            </div>
                            <div className="text-left mt-4">
                                <span className="font-medium text-sm block">VISI</span>
                                <p className="text-xs">Mewujudkan Himpunan Mahasiswa Statistika UNISBA Sebagai
                                    Organisasi Yang Unggul Dan Profesional, Serta Sebagai Wadah Aspirasi ..</p>
                            </div>
                            <div className="text-left mt-2">
                                <span className="font-medium text-sm block">PROGRAM UNGGULAN</span>
                                <ul className="text-xs mt-2">
                                    <li>- Kotak Aspirasi</li>
                                    <li>- Statistics With Podcast</li>
                                    <li>- Statistika literasi</li>
                                </ul>
                            </div>
                            <div className="border-t-2 border-t-gray-400 mt-2 text-right flex justify-between">
                                <span className="text-sm font-bold block mt-2">Nomor Urut 2</span>
                                {/*<span*/}
                                {/*    className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
                            </div>
                        </div>
                        <div
                            className={`cursor-pointer flex-col bg-card w-fit sm:w-96 min-h-full rounded-xl px-3 pt-3 pb-5 ${choose === 2 && "shadow-choose"}`}
                            onClick={() => chooseHandler(2)}>
                            <div className="flex justify-between">
                                <Image className="rounded-l-xl" src={"/himasta/ketua3.jpg"} width={175} height={150}
                                       alt={"ketua"} objectFit={"cover"}
                                       objectPosition={"top"}/>
                                <div className="flex-col justify-between mr-auto mt-auto mb-auto ml-4 text-left">
                                    <span className="font-semibold text-lg block">KETUA</span>
                                    <span className="font-medium text-sm block">M.Farhan Praja U</span>
                                    <span className="font-medium text-sm block">10060120073</span>
                                </div>
                            </div>
                            <div className="text-left mt-4">
                                <span className="font-medium text-sm block">VISI</span>
                                <p className="text-xs">Memaksimalkan fungsi HIMASTA sebagai wadah bagi keluarga besar
                                    Statistika UNISBA dengan
                                    membangun organisasi yang aktif, aspiratif..</p>
                            </div>
                            <div className="text-left mt-4">
                                <span className="font-medium text-sm block">PROGRAM UNGGULAN</span>
                                <p className="text-xs mt-3">Menyelenggarakan Forum apresiatif dan kritik membangun guna
                                    mencapai kinerja yang optimal.  </p>
                            </div>
                            <div className="border-t-2 border-t-gray-400 mt-2 text-right flex justify-between">
                                <span className="text-sm font-bold block mt-2">Nomor Urut 3</span>
                                {/*<span*/}
                                {/*    className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
                            </div>
                        </div>
                    </div>
                }

                {major === "matematika" &&
                    <div className="flex flex-col md:flex-row justify-evenly mt-2 font-poppins">
                        <div
                            className={`cursor-pointer flex-col bg-card w-fit sm:w-96 min-h-full rounded-xl px-3 pt-3 pb-5 ${choose === 0 && "shadow-choose"}`}
                            onClick={() => chooseHandler(0)}>
                            <div className="flex justify-between">
                                <Image className="rounded-l-xl" src={"/himatika/ketua1.jpg"} width={175} height={150}
                                       alt={"ketua"} objectFit={"cover"}
                                       objectPosition={"top"}/>
                                <div className="flex-col justify-between mr-auto mt-auto mb-auto ml-4 text-left">
                                    <span className="font-semibold text-lg block">KETUA</span>
                                    <span className="font-medium text-sm block">Dieva Gheamelia</span>
                                </div>
                            </div>
                            <div className="text-left mt-4">
                                <span className="font-medium text-sm block">VISI</span>
                                <p className="text-xs">Menjadikan HIMATIKA sebagai wadah pengembangan diri yang
                                    mengedepanan toleransi, kerjasama dan kekeluargaan</p>
                            </div>
                            <div className="text-left mt-2">
                                <span className="font-medium text-sm block">MISI</span>
                                <ul className="text-xs mt-2">
                                    <li>- Meningkatkan kinerja HIMATIKA sehingga dapat terus berinovasi</li>
                                    <li>- Mewujudkan nilai kekeluargaan melalui kegiatan yang beroreintasi</li>
                                </ul>
                            </div>
                            <div className="border-t-2 border-t-gray-400 mt-2 text-right flex justify-between">
                                <span className="text-sm font-bold block mt-2">Nomor Urut 1</span>
                                {/*<span*/}
                                {/*    className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
                            </div>
                        </div>
                    </div>
                }

                {major === "farmasi" &&
                    <div className="flex flex-col md:flex-row justify-evenly mt-2 font-poppins">
                        <div
                            className={`cursor-pointer flex-col bg-card w-fit sm:w-96 min-h-full rounded-xl px-3 pt-3 pb-5 ${choose === 0 && "shadow-choose"}`}
                            onClick={() => chooseHandler(0)}>
                            <div className="flex justify-between">
                                <Image className="rounded-l-xl" src={"/himafar/ketua1.jpg"} width={175} height={150}
                                       alt={"ketua"} objectFit={"cover"}
                                       objectPosition={"top"}/>
                                <div className="flex-col justify-between mr-auto mt-auto mb-auto ml-4 text-left">
                                    <span className="font-semibold text-lg block">KETUA</span>
                                    <span className="font-medium text-sm block">Jahra Farhanuddin</span>
                                </div>
                            </div>
                            <div className="text-left mt-4">
                                <span className="font-medium text-sm block">VISI</span>
                                <p className="text-xs">Himafar sebagai wadah pembelajar, serta pengembangan untuk
                                    menciptakan mahasiswa yang produktif, kreatif dan innovatif yang bermanfaat bagi
                                    masyarakat.</p>
                            </div>
                            <div className="text-left mt-2">
                                <span className="font-medium text-sm block">MISI</span>
                                <ul className="text-xs mt-2">
                                    <li>- Menciptakan rasa profesionalitas, tanggung jawab dan kenyaman dalam
                                        berorganisasi
                                        untuk meningkatkan mutu kerja pengurus
                                    </li>
                                </ul>
                            </div>
                            <div className="border-t-2 border-t-gray-400 mt-2 text-right flex justify-between">
                                <span className="text-sm font-bold block mb-auto">Nomor Urut 1</span>
                                {/*<span*/}
                                {/*    className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
                            </div>
                        </div>
                        <div
                            className={`cursor-pointer flex-col bg-card w-fit sm:w-96 min-h-full rounded-xl px-3 pt-3 pb-5 ${choose === 0 && "shadow-choose"}`}
                            onClick={() => chooseHandler(1)}>
                            <div className="flex justify-between">
                                <Image className="rounded-l-xl" src={"/himafar/ketua2.jpg"} width={175} height={150}
                                       alt={"ketua"} objectFit={"cover"}
                                       objectPosition={"top"}/>
                                <div className="flex-col justify-between mr-auto mt-auto mb-auto ml-4 text-left">
                                    <span className="font-semibold text-lg block">KETUA</span>
                                    <span className="font-medium text-sm block">M. Ariq Akhsyal</span>
                                </div>
                            </div>
                            <div className="text-left mt-4">
                                <span className="font-medium text-sm block">VISI</span>
                                <p className="text-xs">Mewujudkan HIMAFAR UNISBA yang bergerak secara dedikatif,
                                    responsif, dan kreativ melalui kolaborasi civitas akademia Farmasi</p>
                            </div>
                            <div className="text-left mt-2">
                                <span className="font-medium text-sm block">MISI</span>
                                <ul className="text-xs mt-2">
                                    <li>- Sense Togetherness and Professiinality</li>
                                    <li>- Communiation Within Action</li>
                                    <li>- From Ask to Act</li>
                                </ul>
                            </div>
                            <div className="border-t-2 border-t-gray-400 mt-2 mb-auto text-right flex justify-between">
                                <span className="text-sm font-bold block mt-2">Nomor Urut 2</span>
                                {/*<span*/}
                                {/*    className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
                            </div>
                        </div>
                    </div>
                }

                <button type="button" onClick={handleShowWarning}
                        className="mt-2 mx-auto text-white w-full md:w-72 bg-primary hover:bg-primary-darker focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none">
                    Pilih
                </button>
            </div>
        </>
    )
}

export default Himasta;
