import NavbarButton from "./navbar_button";
import Image from "next/image";

export default function Navbar(props) {
    let {active, handlePageChange, quickCount} = props;

    const data = ["beranda", "bem", "himasta", "himatika", "himafar"];

    return (
        <div id="navbar" className="px-12 py-8 min-w-full fixed z-10 font-poppins uppercase font-medium">
            <div className="flex justify-between">
                <div className="my-auto">
                    <Image height={50} width={80} src={"/logo-fmipa.png"} alt={"logo"}></Image>
                </div>
                <div className="my-auto flex">
                    {data.map((value, index) => {
                        if (quickCount && value === "beranda") {
                            return (<></>)
                        }
                        if (quickCount) {
                            index--
                        }
                        // eslint-disable-next-line react/jsx-key
                        return <NavbarButton name={value} active={active === index} handlePageChange={handlePageChange}
                                             index={index}/>
                    })}

                    {quickCount &&
                        <button type="button"
                                           className="mt-2 text-white bg-primary hover:bg-primary-darker focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                            Export Data
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
