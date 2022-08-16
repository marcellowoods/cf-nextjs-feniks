import Head from "next/head";
// import Header from "../components/Header";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

// https://rishimohan.me/blog/nextjs-canonical-tag
// https://dev.to/tomtomdu73/how-to-easily-optimize-your-seo-when-hosting-your-site-with-netlify-2k1c
//https://stackoverflow.com/questions/59812003/tailwindcss-fixed-sticky-footer-on-the-bottom
//https://www.semrush.com/blog/what-not-to-do-when-writing-a-meta-description/?kw=&cmp=EE_SRCH_DSA_Blog_Core_BU_EN&label=dsa_pagefeed&Network=g&Device=c&utm_content=515816407646&kwid=dsa-1053501803947&cmpid=11776420745&agpid=113999318146&BU=Core&extid=23623719025&adpos= 
const Layout = ({ children }) => {

    const router = useRouter();
    const canonicalUrl = (`https://pk-feniks.com` + (router.asPath === "/" ? "" : router.asPath)).split("?")[0];
    // console.log(canonicalUrl)

    return (
        <div className="text-black bg-black flex flex-col h-screen justify-between">
            <Head>
                
                <title>{"Феникс - Винаги сме готови да оцветим вашия празник"}</title>

                <link rel="icon" href="/static/images/feniks.jpg" />
                <link rel="canonical" href={canonicalUrl} />

                <meta name="description" content={"Организиране на концерти, лазерно шоу, презентации, озвучаване, фойерверки, партита, детски програми, прожекции на филми, индивидуално шоу по ваши песни."} />

                <meta property="og:title" content={"Феникс - Винаги сме готови да оцветим вашия празник"} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/static/images/logo1.jpg" />
                <meta property="og:url" content={canonicalUrl} />
            </Head>
            <Header />
            {/* <Main /> */}
            <main className="">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;

