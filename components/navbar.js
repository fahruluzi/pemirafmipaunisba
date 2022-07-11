import NavbarButton from "./navbar_button";
import Image from "next/image";
import {useRouter} from "next/router";

export default function Navbar(props) {
    const router = useRouter()

    let {active, handlePageChange, quickCount} = props;

    const data = ["beranda", "bem", "himasta", "himatika", "himafar"];

    const logoutHandler = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        router.push("/")
    }

    return (
        <div id="navbar" className="px-12 py-8 min-w-full fixed z-10 font-poppins uppercase font-medium">
            <div className="flex justify-between">
                <div className="my-auto cursor-pointer">
                    <Image height={50} width={80} src={"/logo-fmipa.png"} alt={"logo"}
                           onClick={() => router.push('/')}></Image>
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
                        return <NavbarButton key={index} name={value} active={active === index}
                                             handlePageChange={handlePageChange}
                                             index={index}/>
                    })}

                    {quickCount &&
                        <>
                            <button key={99} type="button"
                                    className="mt-2 text-white bg-primary hover:bg-primary-darker focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                                Export
                            </button>
                            <button key={98} type="button" onClick={logoutHandler}
                                    className="mt-2 text-white bg-primary hover:bg-primary-darker focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                                Keluar
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
