import React, { Fragment } from "react";
import Link from 'next/link'
import Button from "./Button.js";
import {
    getClosest,
    getSiblings,
    slideToggle,
    slideUp,
} from "../utils/mobile-nav-utils";
import PropTypes from "prop-types";


const MobileNavMenu = ({ MobilemenuData, ofcanvasOpen, ofcanvasHandaler }) => {
    const MobileMenuArr = MobilemenuData;
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 500);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 500);
                }
            });
        }
    };


    return (
        <div
            className={`${ofcanvasOpen ? "mobile-menu-open" : ""
                } fixed invisible z-50 top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto opacity-0 transition-all`}
        >
            <div
                className="OffCanvasContent fixed left-0 top-0 z-20 opacity-0 invisible h-full w-full bg-black"
                onClick={ofcanvasHandaler}
                onKeyDown={ofcanvasHandaler}
                role="button"
                tabIndex={0}
            ></div>
            <div
                className="OffCanvasContent"
                onClick={ofcanvasHandaler}
                onKeyDown={ofcanvasHandaler}
                role="button"
                tabIndex={0}
            />
            <div
                className="bg-opacity-70 site-mobile-menu transform -translate-x-full 
            transition-all text-white bg-black  z-30 
            relative h-full px-8 py-8 w-310 sm:w-96 overflow-x-hidden overflow-y-auto"
            >
                <div className="header flex  items-center">
                    <Link href="/">
                        <a className="flex logo-text font-logoFont text-xl font-bold" onClick={ofcanvasHandaler}>
                            ФЕНИКС
                        </a>

                    </Link>

                    <button
                        onClick={ofcanvasHandaler}
                        onKeyDown={ofcanvasHandaler}
                        className=" flex justify-end items-center ml-auto"
                    >
                        {" "}
                        {/* <i className="fa-solid text-2xl fa-xmark"></i> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                </div>
                <ul className="mt-10 mb-10">
                    {MobileMenuArr?.map((menu) => {
                        const submenu = menu.submenu;

                        return (
                            <li
                                key={`menu-${menu.id}`}
                                className={`${!!submenu ? "has-submenu-dropdown" : ""
                                    } relative font-medium block pb-3 mb-3 border-b`}
                            >
                                {!submenu && (
                                    <Link href={menu.link}>

                                        <a activeclassname="active" onClick={ofcanvasHandaler}>
                                            {menu.text}
                                        </a>


                                    </Link>
                                )}

                                {!!submenu && (
                                    <Fragment>

                                        <button
                                            className=" menu-toggle menu-expand flex justify-between justify-center cursor-pointer bg-transparent"
                                            onClick={onClickHandler}
                                            onKeyDown={onClickHandler}
                                        >
                                            <a activeclassname="active">
                                                {menu.text}
                                            </a>
                                            {/* <i className="fa-solid fa-angle-down"></i> */}
                                            {/* <svg className="absolute right-0" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path strokeLinecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg> */}

                                        </button>



                                        <ul className="submenu-nav hidden mt-4">
                                            {submenu.map((submenu, i) => {
                                                return (
                                                    <li
                                                        key={`submenu${i}`}
                                                        className="font-medium block pb-3 mb-3 px-3 border-b last:mb-0 last:border-0 "
                                                    >
                                                        <Link href={submenu.link}>

                                                            <a activeclassname="active" onClick={ofcanvasHandaler}>
                                                                {submenu.text}
                                                            </a>
                                                            
                                                        </Link>


                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </Fragment>
                                )}
                            </li>
                        );
                    })}
                </ul>
                {/* <div className="action-button text-center">
                    <Button
                        path="/booking"
                        shape="rounded"
                        className="text-white"
                    >
                        schedule a visit
                    </Button>
                </div> */}
            </div>
        </div>
    );
};

MobileNavMenu.propTypes = {
    MobilemenuData: PropTypes.array,
    ofcanvasOpen: PropTypes.bool,
    ofcanvasHandaler: PropTypes.func,
};

export default MobileNavMenu;
