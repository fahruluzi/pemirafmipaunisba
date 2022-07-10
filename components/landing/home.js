import styles from '../../styles/landing/Home.module.scss';

import { useRouter } from 'next/router'
import {useCountdown} from '../countdown';

const Home = () => {
    const router = useRouter()
    let [days, hours, minutes, seconds] = useCountdown(1657504800000);

    days =0
    hours =0
    minutes =0
    seconds=0

    const handleClick = (e) => {
        e.preventDefault()
        router?.push("/bem")
    }

    return (
        <div
            className={styles["landing-container-home"]}>
            <div className="text-left">
                <span className={styles["landing-container-home-title"]}>PEMILIHAN KETUA BEM, HIMASTA, HIMATIKA, DAN HIMAFAR</span>
            </div>

            {
                days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0 ?
                    <div className="">
                        <button type="button" onClick={handleClick}
                                className="mt-2 mx-auto text-black w-full md:w-72 bg-secondary hover:bg-amber-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none">
                            Pilih Kandidat Sekarang!
                        </button>
                    </div>
                    :
                    <div className="">
                <span
                    className="uppercase block text-secondary font-semibold text-sm sm:text-xl">HITUNG MUNDUR</span>
                        <div className="mt-12 flex justify-around">
                            <div
                                className="bg-white w-32 xl:w-56 lg:w-48 md:w-44 sm:w-36 h-32 xl:h-56 lg:h-48 md:h-44 sm:h-36 rounded-xl lg:rounded-lg px-2 py-8 shadow-count mr-2 sm:mr-1">
                                <p className="block text-2xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-5xl mb-2 text-center">{days}</p>
                                <p className="block text-sm md:text-xl mt-8 xl:mt-10 lg:mt-8 uppercase text-center">hari</p>
                            </div>
                            <div
                                className="bg-white w-32 xl:w-56 lg:w-48 md:w-44 sm:w-36 h-32 xl:h-56 lg:h-48 md:h-44 sm:h-36 rounded-xl lg:rounded-lg px-2 py-8 shadow-count mr-2 sm:mr-1">
                                <p className="block text-2xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-5xl mb-2 text-center">{hours}</p>
                                <p className="block text-sm md:text-xl mt-8 xl:mt-10 lg:mt-8 uppercase text-center">jam</p>
                            </div>
                            <div
                                className="bg-white w-32 xl:w-56 lg:w-48 md:w-44 sm:w-36 h-32 xl:h-56 lg:h-48 md:h-44 sm:h-36 rounded-xl lg:rounded-lg px-2 py-8 shadow-count mr-2 sm:mr-1">
                                <p className="block text-2xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-5xl mb-2 text-center">{minutes}</p>
                                <p className="block text-sm md:text-xl mt-8 xl:mt-10 lg:mt-8 uppercase text-center">menit</p>
                            </div>
                            <div
                                className="bg-white w-32 xl:w-56 lg:w-48 md:w-44 sm:w-36 h-32 xl:h-56 lg:h-48 md:h-44 sm:h-36 rounded-xl lg:rounded-lg px-2 py-8 shadow-count mr-2 sm:mr-1">
                                <p className="block text-2xl xl:text-8xl lg:text-7xl md:text-7xl sm:text-5xl mb-2 text-center">{seconds}</p>
                                <p className="block text-sm md:text-xl mt-8 xl:mt-10 lg:mt-8 uppercase text-center">detik</p>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Home;
