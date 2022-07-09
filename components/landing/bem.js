import styles from '../../styles/landing/Bem.module.scss';

const Bem = () => {
    return(
        <div
            className={styles["landing-container-bem"]}>
            <span className="block font-poppins font-medium text-3xl">KETUA DAN WAKIL KETUA BADAN EKSEKUTIF MAHASISWA</span>
            <span className="block font-poppins font-medium text-3xl">FMIPA UNISBA</span>
            <div className="mt-8 flex justify-center">
                <div className="bg-card min-w-fit min-h-full rounded-xl px-2 py-8">
                    <span className="block text-9xl mb-2 text-center">0</span>
                    <span className="block text-xl mt-8 uppercase text-center">hari</span>
                    <span className="block text-xl mt-8 uppercase text-center">hari</span>
                    <span className="block text-xl mt-8 uppercase text-center">hari</span>
                    <span className="block text-xl mt-8 uppercase text-center">hari</span>
                    <span className="block text-xl mt-8 uppercase text-center">hari</span>
                    <span className="block text-xl mt-8 uppercase text-center">hari</span>
                </div>
            </div>
        </div>
    )
}

export default Bem;
