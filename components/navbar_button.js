import UseWindowSize from "./resize";

export default function NavbarButton(props) {
    const {name, active, handlePageChange, index} = props;
    const [width, height] = UseWindowSize();

    return (
        <button className={width < 768 && !active && "hidden"} onClick={() => handlePageChange(index)}>
            <div
                className={`mr-6 px-4 py-2 rounded cursor-pointer duration-500 uppercase ${active ? "bg-alert-warning-background text-amber-600 hover:bg-amber-200" : "hover:bg-gray-300"}`}>
                <h1>{name}</h1>
            </div>
        </button>
    )
}