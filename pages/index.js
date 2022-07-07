import Navbar from "../components/navbar";
import styles from '../styles/landing/Landing.module.scss';

import { useState } from "react";

import ReactPageScroller from 'react-page-scroller';

const Home = () => {

    const [currentPage, setCurrentPage] = useState(0)

    const handlePageChange = number => {
        setCurrentPage(number)
    };

    return(
        <>
            <Navbar active={currentPage} handlePageChange={handlePageChange}/>
            <ReactPageScroller
                pageOnChange={handlePageChange}
                customPageNumber={currentPage}
            >
                 <div
                     className={`section ${styles["landing-container-child"]} ${styles["landing-container-home"]}`}>
                     <h1>Item One</h1>
                 </div>
                <div
                    className={`section ${styles["landing-container-child"]} ${styles["landing-container-home"]}`}>
                    <h1>Item 2</h1>
                </div>
                <div
                    className={`section ${styles["landing-container-child"]} ${styles["landing-container-home"]}`}>
                    <h1>Item 3</h1>
                </div>
                <div
                    className={`section ${styles["landing-container-child"]} ${styles["landing-container-home"]}`}>
                    <h1>Item 4</h1>
                </div>
                <div
                    className={`section ${styles["landing-container-child"]} ${styles["landing-container-home"]}`}>
                    <h1>Item 5</h1>
                </div>
            </ReactPageScroller>
        </>
    )
}

export default Home;
