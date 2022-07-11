import styles from '../../styles/landing/Bem.module.scss';
import Image from "next/image";

const Bem = (props) => {
    const { data } = props;

    return (
        <div
            className={styles["landing-container-bem"]}>
            <div className="">
                <span
                    className={styles["landing-container-bem-title"]}>KETUA DAN WAKIL KETUA BADAN EKSEKUTIF MAHASISWA</span>
                <span className={styles["landing-container-bem-title"]}>FMIPA UNISBA</span>
            </div>
            <div className="flex justify-evenly mt-2 font-poppins flex-nowrap">
                <div className="flex-col bg-card w-96 min-h-full rounded-xl px-3 pt-3 pb-5">
                    <div className="flex justify-between">
                        <Image className="rounded-l-xl" src={"/bem/ketua.png"} width={175} height={150} alt={"ketua"} objectFit={"cover"}
                               objectPosition={"top"} />
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
                        <Image className="rounded-r-xl" src={"/bem/wakil.png"} width={175} height={150} alt={"ketua"} objectFit={"cover"}
                               objectPosition={"top"} />
                    </div>

                    <span className="font-medium text-6xl block mt-8">{data && data.data && data.data.bem1_count}%</span>

                    <div className="border-t-2 border-t-gray-400 mt-6 text-right flex justify-between">
                        <span className="text-sm font-bold block mt-2">Nomor Urut 1</span>
                        {/*<span className="text-xs block mt-2 cursor-pointer hover:text-secondary">Lihat Selengkapnya..</span>*/}
                    </div>
                </div>
            </div>
            <span className="mt-6 font-bold">JUMLAH PEMILIH : {data && data.data && data.data.bem_choosed}%</span>
        </div>
    )
}

export default Bem;
