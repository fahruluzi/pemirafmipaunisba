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
import axios from "axios";

const QuickCount = () => {
    const router = useRouter()

    const [currentPage, setCurrentPage] = useState(0)
    const [data, setData] = useState(null)

    const handlePageChange = number => {
        setCurrentPage(number)
    };

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

    const getData = async () => {
        try {
            const res = await axios.get(`/api/quick-count`);

            if (res.status === 200) {
                setData(res.data)
            } else {
                console.log(JSON.stringify(res.data))
            }
        }catch (e) {
            console.log(JSON.stringify(res.data))
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getData()
    }, [])

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
                <Bem data={data}/>
                <Himasta data={data}/>
                <Himatika data={data}/>
                <Himafar data={data}/>
            </ReactPageScroller>
        </>
    )
}

export default QuickCount;
