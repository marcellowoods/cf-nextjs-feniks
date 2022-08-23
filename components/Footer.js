export default function Footer() {
    return (
        <footer className="pb-4 text-gray-200">
            <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">

                <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-gray">
                    <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0  ">



                        <li>
                            <div
                                target="_blank"

                                className="text-base whitespace-pre text-white hover:text-white transition-colors duration-300 font-semibold"
                            >
                                088 771 3207  -  Тихомир Горанов
                            </div>
                        </li>

                        <li>
                            <a
                                target="_blank"
                                href="https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B4%D1%83%D1%86%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B0-%D0%BA%D1%8A%D1%89%D0%B0-%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81-1994175757577191/"
                                className="underline text-base text-white hover:text-white transition-colors duration-300 font-semibold"
                            >
                                facebook

                            </a>
                        </li>

                    </ul>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <div

                            className="text-md text-white hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
                        >
                            © Продуцентска къща "ФЕНИКС"
                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
