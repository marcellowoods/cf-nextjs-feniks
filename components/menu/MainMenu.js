import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';


const MainMenu = ({ allmenuData }) => {

    const menuarr = allmenuData;

    return (
        <ul className="hidden  lg:flex lg:items-center lg:w-auto lg:space-x-12">
            {menuarr?.map((menu) => {
                const submenu = menu.submenu;

                // console.log(submenu);

                return (
                    <li
                        key={`menu-${menu.id}`}
                        className={`${!!submenu ? "has-submenu" : ""
                            } menu-item font-bold text-white group relative cursor-pointer `}
                    >

                        {submenu ? (
                            <div
                                activeclassname="active"
                                className="text-white text-lg hover:text-gray-300  tr04">

                                {menu.text}
                            </div>
                        ) : (
                            <Link

                                href={menu.link}

                            >
                                <a
                                    activeclassname="active"
                                    className="text-white text-lg hover:text-gray-300  tr04">

                                    {menu.text}
                                </a>
                            </Link>
                        )}

                        {!!submenu && (
                            <ul
                                className="submenu-nav nav-dropdown-border border-primary absolute left-0 z-50 bg-black mt-14 
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all py-4 
                            duration-500 min-w-200 w-64 bg-opacity-70"
                            >
                                {submenu.map((submenu, i) => {
                                    return (
                                        <li
                                            key={`submenu${i}`}
                                            className="p-4"
                                        >
                                            <Link
                                                href={submenu.link}

                                            >
                                                <a className="tr04  menu-sub-item  p-2 text-sm font-semibold text-white block hover:text-gray-300">
                                                    {submenu.text}
                                                </a>

                                            </Link>

                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default MainMenu;