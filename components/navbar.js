import NavbarButton from "./navbar_button";
import Image from "next/image";

export default function Navbar(props) {
    let { active, handlePageChange } = props;

    return (
        <div id="navbar" className="px-12 py-8 min-w-full fixed z-10 font-poppins uppercase font-medium">
            <div className="flex justify-between">
                <div className="my-auto">
                    <Image height={50} width={80} src={"/logo-fmipa.png"} alt={"logo"}></Image>
                </div>
                <div className="my-auto flex">
                    <NavbarButton name="beranda" active={active === 0} handlePageChange={handlePageChange} index={0}/>
                    <NavbarButton name="bem" active={active === 1} handlePageChange={handlePageChange} index={1}/>
                    <NavbarButton name="himasta" active={active === 2} handlePageChange={handlePageChange} index={2}/>
                    <NavbarButton name="himatika" active={active === 3} handlePageChange={handlePageChange} index={3}/>
                    <NavbarButton name="himafar" active={active === 4} handlePageChange={handlePageChange} index={4}/>
                </div>
            </div>
        </div>
    )
}
