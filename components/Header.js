import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
// import MainMenu from "../../../components/menu/main-menu";
import MobileNavMenu from "./menu/MobileNavMenu";
import MainMenu from "./menu/MainMenu";
import Link from 'next/link';
import useSticky from "./hooks/useSticky";




// type Menu {
//     id: ID!
//     text: String!
//     link: String!
//     submenu: [Submenu]
//     megamenu: [Megamenu]
// }
// type Submenu {
//     id: ID!
//     text: String!
//     link: String!
// }

const Header = () => {
    // Sticky Header
    const { sticky, headerRef, fixedRef } = useSticky();
    const menu = [
        { id: "home", text: "НАЧАЛО", link: "/" },
        { id: "events", text: "СЪБИТИЯ", link: "/events" },
        {
            id: "gallery", text: "ГАЛЕРИЯ", link: "/gallery",
            submenu: [
                { id: "video", text: "ВИДЕО", link: "/video-gallery" },
                { id: "img-gallery", text: "СНИМКИ", link: "/img-gallery" },
            ]
        },
        {
            id: "uslugi", text: "УСЛУГИ", link: "uslugi",
            submenu: [
                { id: "koncerti", text: "КОНЦЕРТИ", link: "/koncerti" },
                { id: "meropriyatiya", text: "МЕРОПРИЯТИЯ", link: "/meropriyatiya" },
                { id: "lazer-show", text: "ЛАЗЕРНО ШОУ", link: "/lazerno-show" },
                { id: "kino", text: "ПЪТУВАЩО КИНО", link: "/kino" },
                { id: "fusion-show", text: "FUSION ШОУ", link: "/fusion-show" },

            ]
        },
        { id: "kontakti", text: "КОНТАКТИ", link: "/contacts" },
        // { id: "ABOUT", text: "ЗА НАС", link: "/about" },

    ]

    // OfCanvas Menu
    const [ofcanvasOpen, setOfcanvasOpen] = useState(false);

    // OfCanvas Menu Open & Remove
    const ofcanvasHandaler = () => {
        setOfcanvasOpen((prev) => !prev);
    };


    return (
        <header ref={headerRef}>

            <div
                ref={fixedRef}
                className={`bg-transparent absolute w-full mx-auto z-40 header-top  ${sticky ? "sticky-header !fixed !top-0 clearNav" : "clearNavTop"
                    }`}
            >
                <div className="p-5">
                    <nav className="bg-transparent max-w-5xl mx-auto flex justify-between items-center">
                        <Link href="/">
                            <a

                                className="flex logo-text font-logoFont cursor-pointer text-xl sm:text-2xl font-bold md:mb-0"
                            >
                                ФЕНИКС

                            </a>
                        </Link>
                        <div className="header-right-action flex items-center ">


                            <MainMenu allmenuData={menu} />
                            <button
                                onClick={ofcanvasHandaler}
                                onKeyDown={ofcanvasHandaler}
                                className="flex flex-col space-y-1.5 ml-8 lg:hidden"
                            >
                                <span className="line h-0.5 w-6 inline-block bg-white"></span>
                                <span className="line h-0.5 w-6 inline-block bg-white"></span>
                                <span className="line h-0.5 w-6 inline-block bg-white"></span>
                            </button>

                        </div>
                    </nav>
                    {/* <span className="inner-border border-b block"></span> */}
                </div>

            </div>
            <MobileNavMenu
                MobilemenuData={menu}
                ofcanvasOpen={ofcanvasOpen}
                ofcanvasHandaler={ofcanvasHandaler}
            />
        </header>
    );
};

Header.propTypes = {
    data: PropTypes.shape({
        menu: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

export default Header;
