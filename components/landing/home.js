import styles from '../../styles/landing/Home.module.scss';

import { useCountdown } from '../countdown';

const Home = () => {
    const [days, hours, minutes, seconds] = useCountdown(1657504800000);
    return(
        <div
            className={styles["landing-container-home"]}>
            <div className="text-left">
                <span className={styles["landing-container-home-title"]}>PEMILIHAN KETUA BEM, HIMASTA, HIMATIKA, DAN HIMAFAR</span>
            </div>
            <span className="uppercase mt-32 block text-secondary font-medium text-xl">HITUNG MUNDUR</span>
            <div className="mt-12 flex justify-around">
                <div className="bg-white w-60 h-60 rounded-xl px-2 py-8 shadow-count">
                    <span className="block text-9xl mb-2 text-center">{days}</span>
                    <span className="block text-xl mt-8 uppercase text-center">hari</span>
                </div>
                <div className="bg-white w-60 h-60 rounded-xl px-2 py-8 shadow-count">
                    <span className="block text-9xl mb-2 text-center">{hours}</span>
                    <span className="block text-xl mt-8 uppercase text-center">jam</span>
                </div>
                <div className="bg-white w-60 h-60 rounded-xl px-2 py-8 shadow-count">
                    <span className="block text-9xl mb-2 text-center">{minutes}</span>
                    <span className="block text-xl mt-8 uppercase text-center">menit</span>
                </div>
                <div className="bg-white w-60 h-60 rounded-xl px-2 py-8 shadow-count">
                    <span className="block text-9xl mb-2 text-center">{seconds}</span>
                    <span className="block text-xl mt-8 uppercase text-center">detik</span>
                </div>
            </div>
        </div>
    )
}

export default Home;
