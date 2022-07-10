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

                    <span className="font-medium text-6xl block mt-8">80%</span>

                    <div className="border-t-2 border-t-gray-400 mt-6 text-right flex justify-between">
                        <span className="text-sm font-bold block mt-2">Nomor Urut 1</span>
                        {/*<span className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
                    </div>
                </div>
                <div className="flex-col justify-between bg-card w-96 rounded-xl px-3 pt-3 pb-5">
                    <div className="flex justify-between">
                        <Image className="rounded-l-xl" src={"/himafar/ketua2.jpg"} width={175} height={150}
                               alt={"ketua"} objectFit={"cover"}
                               objectPosition={"top"}/>
                        <div className="flex-col justify-between mr-auto mt-auto mb-auto ml-4 text-left">
                            <span className="font-semibold text-lg block">KETUA</span>
                            <span className="font-medium text-sm block">M. Ariq Akhsyal</span>
                        </div>
                    </div>

                    <span className="font-medium text-6xl block mt-8">80%</span>

                    <div className="border-t-2 border-t-gray-400 mt-6 text-right flex justify-between">
                        <span className="text-sm font-bold block mt-2">Nomor Urut 2</span>
                        {/*<span className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
                    </div>
                </div>
            </div>
            <span className="mt-6 font-bold">JUMLAH PEMILIH : 70%</span>
        </div>
    )
}

export default Himafar;
