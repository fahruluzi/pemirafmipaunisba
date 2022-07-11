import styles from '../../styles/landing/Hismasta.module.scss';
import Image from "next/image";

const Himasta = (props) => {
    const {data} = props;

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

                    <span className="font-medium text-6xl block mt-8">{data && data.data && data.data.himasta1_count}%</span>

                    <div className="border-t-2 border-t-gray-400 mt-6 text-right flex justify-between">
                        <span className="text-sm font-bold block mt-2">Nomor Urut 1</span>
                        {/*<span className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
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

                    <span className="font-medium text-6xl block mt-8">{data && data.data && data.data.himasta2_count}%</span>

                    <div className="border-t-2 border-t-gray-400 mt-6 text-right flex justify-between">
                        <span className="text-sm font-bold block mt-2">Nomor Urut 2</span>
                        {/*<span className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
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

                    <span className="font-medium text-6xl block mt-8">{data && data.data && data.data.himasta3_count}%</span>

                    <div className="border-t-2 border-t-gray-400 mt-6 text-right flex justify-between">
                        <span className="text-sm font-bold block mt-2">Nomor Urut 3</span>
                        {/*<span className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
                    </div>
                </div>
            </div>
            <span className="mt-6 font-bold">JUMLAH PEMILIH : {data && data.data && data.data.himasta_choosed}%</span>
        </div>
    )
}

export default Himasta;
