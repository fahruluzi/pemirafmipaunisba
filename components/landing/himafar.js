import styles from '../../styles/landing/Himafar.module.scss';
import Image from "next/image";

const Himafar = () => {
    return (
        <div
            className={styles["landing-container-himafar"]}>
            <div className="">
                <span
                    className={styles["landing-container-himafar-title"]}>KETUA UMUM HIMPUNAN MAHASISWA FARMASI</span>
                <span className={styles["landing-container-himafar-title"]}>FMIPA UNISBA</span>
            </div>
            <div className="flex justify-evenly mt-2 font-poppins">
                <div className="flex-col justify-between bg-card w-96 rounded-xl px-3 pt-3 pb-5">
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
                        <p className="text-xs">Himafar sebagai wadah pembelajar, serta pengembangan untuk menciptakan mahasiswa yang produktif, kreatif dan innovatif yang bermanfaat bagi masyarakat.</p>
                    </div>
                    <div className="text-left mt-2">
                        <span className="font-medium text-sm block">MISI</span>
                        <ul className="text-xs mt-2">
                            <li>- Menciptakan rasa profesionalitas, tanggung jawab dan kenyaman dalam berorganisasi
                                untuk meningkatkan mutu kerja pengurus</li>
                        </ul>
                    </div>
                    <div className="border-t-2 border-t-gray-400 mt-2 text-right flex justify-between">
                        <span className="text-sm font-bold block mb-auto">Nomor Urut 1</span>
                        <span
                            className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>
                    </div>
                </div>
                <div className="flex-col justify-between bg-card w-96 rounded-xl px-3 pt-3 pb-5">
                    <div className="flex justify-between">
                        <Image className="rounded-l-xl" src={"/himafar/ketua2.jpg"} width={175} height={150}
                               alt={"ketua"} objectFit={"cover"}
                               objectPosition={"top"}/>
                        <div className="flex-col justify-between mr-auto mt-auto mb-auto ml-4 text-left">
                            <span className="font-semibold text-lg block">KETUA</span>
                            <span className="font-medium text-sm block">Dieva Gheamelia</span>
                        </div>
                    </div>
                    <div className="text-left mt-4">
                        <span className="font-medium text-sm block">VISI</span>
                        <p className="text-xs">Mewujudkan HIMAFAR UNISBA yang bergerak secara dedikatif, responsif, dan kreativ melalui kolaborasi civitas akademia Farmasi</p>
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
                        <span
                            className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Himafar;
