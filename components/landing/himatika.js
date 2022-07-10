import styles from '../../styles/landing/Himatika.module.scss';
import Image from "next/image";

const Himatika = () => {
    return (
        <div
            className={styles["landing-container-himatika"]}>
            <div className="">
                <span
                    className={styles["landing-container-himatika-title"]}>KETUA UMUM HIMPUNAN MAHASISWA MATEMATIKA</span>
                <span className={styles["landing-container-himatika-title"]}>FMIPA UNISBA</span>
            </div>
            <div className="flex justify-evenly mt-2 font-poppins">
                <div className="flex-col justify-between bg-card w-96 min-h-full rounded-xl px-3 pt-3 pb-5">
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
                        <p className="text-xs">Menjadikan HIMATIKA sebagai wadah pengembangan diri yang mengedepanan toleransi, kerjasama dan kekeluargaan</p>
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
        </div>
    )
}

export default Himatika;
