import styles from '../../styles/landing/Hismasta.module.scss';
import Image from "next/image";

const Himasta = () => {
    return (
        <div
            className={styles["landing-container-himasta"]}>
            <div className="">
                <span
                    className={styles["landing-container-himasta-title"]}>KETUA UMUM HIMPUNAN MAHASISWA STATISTIKA</span>
                <span className={styles["landing-container-himasta-title"]}>FMIPA UNISBA</span>
            </div>
            <div className="flex justify-evenly mt-2 font-poppins">
                <div className="flex-col justify-between bg-card w-96 min-h-full rounded-xl px-3 pt-3 pb-5">
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
                        <p className="text-xs">Menjadikan himpunan mahasiswa statistika unisba sebagai tempat untuk mengembangkan potensi
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
                <div className="flex-col bg-card w-96 min-h-full rounded-xl px-3 pt-3 pb-5">
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
                        <p className="text-xs">Mewujudkan Himpunan Mahasiswa Statistika UNISBA Sebagai Organisasi Yang Unggul Dan Profesional, Serta Sebagai Wadah Aspirasi ..</p>
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
                <div className="flex-col bg-card w-96 min-h-full rounded-xl px-3 pt-3 pb-5">
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
                        <p className="text-xs">Memaksimalkan fungsi HIMASTA sebagai wadah bagi keluarga besar Statistika UNISBA dengan
                            membangun organisasi yang aktif, aspiratif..</p>
                    </div>
                    <div className="text-left mt-4">
                        <span className="font-medium text-sm block">PROGRAM UNGGULAN</span>
                        <p className="text-xs mt-3">Menyelenggarakan Forum apresiatif dan kritik membangun guna mencapai kinerja yang optimal.  </p>
                    </div>
                    <div className="border-t-2 border-t-gray-400 mt-2 text-right flex justify-between">
                        <span className="text-sm font-bold block mt-2">Nomor Urut 3</span>
                        {/*<span*/}
                        {/*    className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Himasta;
