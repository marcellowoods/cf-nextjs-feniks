import Meta from "../components/Meta";
import CategoryCard from "../components/CategoryCard";
import Lasers2 from "../components/Effects/Lasers/Lasers2";
import Courasel from "../components/Courasel";
import { sliderImages } from "../constants";
// import MainMessage from "../components/MainMessage";
import MessageCourasel from "../components/MessageCourasel";
import Link from "next/link";

// no courasel
// <div className="pb-12  sm:pb-12  pt-12">
// <div className="mx-auto max-w-5xl py-24 sm:py-48">
// {/* bg-opacity-50  bg-gray-900  */}
//     <h1 className="px-2 whitespace-pre-line w-full sm:w-auto  text-2xl lg:text-4xl text-center  font-bold text-white  bottom-4 ">
//         Организиране на концерти, лазерно шоу, партита, фойерверки, прожекции на филми, {"\n"}
//         семинари, презентации, {"\n"}
//         индивидуално шоу по ваши песни.
//     </h1>
// </div>
// <div className=" px-4 sm:px-0 text-gray-600 body-font max-w-5xl mx-auto">
//     <h1 className="landing-page-text text-2xl   sm:text-4xl text-center lh-6 ld-04 font-bold text-white">
//         {/* Винаги сме готови да оцветим вашия празник! Композираме и индивидуално шоу по ваши песни! */}
//         Можем да направим вашия празник незабравим
//     </h1>
// </div>
// </div>


// courasel
// <div className="pb-12  sm:pb-24">
// <div className="">
//     <div className="relative ">
//         {/* bg-gray-900 */}
//         <h1 className="p-2 whitespace-pre-line bg-gray-900 w-full sm:w-auto bg-opacity-50 z-10  text-2xl lg:text-4xl text-center lh-6 ld-04 font-bold text-white  bottom-0 left-1/2 absolute -translate-x-1/2">
//             Организиране на концерти, лазерно шоу, партита, фойерверки, прожекции на филми, {"\n"}
//             семинари, презентации, {"\n"}
//             индивидуално шоу по ваши песни.
//         </h1>
//         <Courasel images={sliderImages} />

//     </div>

// </div>

// <div className="px-4 sm:pb-10   sm:px-0 text-gray-600 body-font max-w-5xl pt-12 mx-auto">
//     <h1 className="landing-page-text text-2xl   sm:text-4xl text-center lh-6 ld-04 font-bold text-white">
//         {/* Винаги сме готови да оцветим вашия празник! Композираме и индивидуално шоу по ваши песни! */}
//         Можем да направим вашия празник незабравим
//     </h1>
// </div>
// </div>

export default function Home() {
    return (
        <section className="relative overflow-hidden text-gray-600 body-font z-0 pb-32 sm:pb-52">

            <Lasers2 />

            <Meta title={"Феникс - Винаги сме готови да оцветим вашия празник"} description={"Организиране на концерти, лазерно шоу, фойерверки, прожекции на филми, индивидуално шоу по ваши песни."} />

            <div className="pb-12  sm:pb-24">
                <div className="">
                    <div className="relative ">
                        {/* bg-gray-900 */}
                        <h1 className="p-2 whitespace-pre-line bg-gray-900 w-full bg-opacity-50 z-10  text-base sm:text-2xl text-center lh-6 ld-04 font-bold text-white  bottom-0 left-1/2 absolute -translate-x-1/2">
                            Организиране на концерти,{"\n"} лазерно шоу, партита, фойерверки,{"\n"} прожекции на филми, {"\n"}
                            семинари, презентации, {"\n"}
                            индивидуално шоу по ваши песни.
                        </h1>
                        <Courasel images={sliderImages} />

                    </div>

                </div>

                <div className="px-4 sm:pb-10   sm:px-0 text-gray-600 body-font max-w-5xl pt-12 mx-auto">
                    <h1 className="landing-page-text text-2xl   sm:text-4xl text-center lh-6 ld-04 font-bold text-white">
                        {/* Винаги сме готови да оцветим вашия празник! Композираме и индивидуално шоу по ваши песни! */}
                        Можем да направим вашия празник незабравим
                    </h1>
                </div>
            </div>

            {/* https://play.tailwindcss.com/dzacJTR76X */}
            {/* group hover */}
            <div className="pb-8  max-w-4xl mx-auto fsac4 px-4 ">

                <CategoryCard
                    linkRef={"meropriyatiya"}
                    title={"ОРГАНИЗИРАНЕ НА\n МЕРОПРИЯТИЯ"}
                    description={"Фирмени партита,\n DJ-партита,\n семинари,\n презентации на открито и закрито"}
                />

                <CategoryCard
                    linkRef={"koncerti"}
                    title={"КОНЦЕРТИ"}
                    description={"Концерти на открито и закрито\n по повод различни събития и празници"}
                />

                <CategoryCard
                    linkRef={"kino"}
                    title={"ПЪТУВАЩО КИНО"}
                    description={"Филмови прожекции на открито \n на най-новите тематично подбрани филми"}
                />

                <CategoryCard
                    linkRef={"lazerno-show"}
                    title={"ЛАЗЕРНО ШОУ"}
                    description={"Спектакъл с визуални светлинни внушения,\n което разчупва визията на мероприятието"}
                />


            </div>

            <div className="max-w-lg mx-auto px-4">
                <CategoryCard
                    linkRef={"fusion-show"}
                    title={"FUSION SHOW"}
                    description={"Нов иновативен проект\n на шоу\n непоказвано в България"}
                />
            </div>



            <div className="max-w-4xl pt-8  px-4  mx-auto">
                <MessageCourasel />
            </div>

            <div className=" pt-24 sm:pt-48">
                <h3 className="text-white font-bold  text-base sm:text-4xl  text-center">разгледайте</h3>
                <Link href={"/events"}>

                    <h3 className="text-white font-bold text-base sm:text-4xl  underline cursor-pointer text-center">събитията организирани с нас</h3>

                </Link>
            </div>

        </section>
    );
}
