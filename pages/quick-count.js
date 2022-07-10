import Navbar from "../components/navbar";

import { useState } from "react";

import ReactPageScroller from 'react-page-scroller';
import Bem from "../components/quick_count/bem";
import Himasta from "../components/quick_count/himasta";
import Himatika from "../components/quick_count/himatika";
import Himafar from "../components/quick_count/himafar";
import Head from "next/head";

const QuickCount = () => {

    const [currentPage, setCurrentPage] = useState(0)

    const handlePageChange = number => {
        setCurrentPage(number)
    };

    return(
        <>
            <Head>
                <title>PEMIRA FMIPA UNISBA</title>
                <link rel="icon" href="/bppu.png" />
            </Head>
            <Navbar active={currentPage} handlePageChange={handlePageChange} quickCount={true}/>
            <ReactPageScroller
                pageOnChange={handlePageChange}
                customPageNumber={currentPage}
            >
                <Bem />
                <Himasta />
                <Himatika />
                <Himafar />
            </ReactPageScroller>
        </>
    )
}

export default QuickCount;
