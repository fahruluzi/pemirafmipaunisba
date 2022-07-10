import Navbar from "../components/navbar";

import { useState } from "react";

import ReactPageScroller from 'react-page-scroller';
import Home from "../components/landing/home";
import Bem from "../components/landing/bem";
import Himasta from "../components/landing/himasta";
import Himatika from "../components/landing/himatika";
import Himafar from "../components/landing/himafar";

const Index = () => {

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
                <Home />
                <Bem />
                <Himasta />
                <Himatika />
                <Himafar />
            </ReactPageScroller>
        </>
    )
}

export default Index;
