import Navbar from "../components/navbar";

import {useEffect, useState} from "react";

import ReactPageScroller from 'react-page-scroller';
import Bem from "../components/quick_count/bem";
import Himasta from "../components/quick_count/himasta";
import Himatika from "../components/quick_count/himatika";
import Himafar from "../components/quick_count/himafar";
import Head from "next/head";
import {useRouter} from "next/router";
import jwt from "jsonwebtoken";

const QuickCount = () => {
    const router = useRouter()

    const [currentPage, setCurrentPage] = useState(0)

    const handlePageChange = number => {
        setCurrentPage(number)
    };

    console.log(router)
    console.log("router")

    useEffect(() => {
        try {
            const token = localStorage.getItem('token');
            if (token === "") {
                router.push('/login');
            } else {
                const verified = jwt.verify(token, "pemira_secret_banget");
                if (!verified) {
                    router.push('/login');
                }
            }
        } catch (error) {
            router.push('/login', "/login", {
                isReady: true,
            });
        }

    }, [router.pathname]); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <>
            <Head>
                <title>PEMIRA FMIPA UNISBA</title>
                <link rel="icon" href="/bppu.png"/>
            </Head>
            <Navbar active={currentPage} handlePageChange={handlePageChange} quickCount={true}/>
            <ReactPageScroller
                pageOnChange={handlePageChange}
                customPageNumber={currentPage}
            >
                <Bem/>
                <Himasta/>
                <Himatika/>
                <Himafar/>
            </ReactPageScroller>
        </>
    )
}

export default QuickCount;
