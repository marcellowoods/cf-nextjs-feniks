import React from 'react'
import PagesLayout from '../components/PagesLayout';
import Meta from '../components/Meta';
import CategoryMedia from '../components/CategoryMedia';


//for newline add whitespace-pre-line and use inside text {"\n"} 
const FusionShow = () => {
    return (
        <PagesLayout>

            <Meta title={"fusion шоу - впечатляващо визуално шоу"} description={"впечатляващо визуално шоу, комбиниращо мултимедийни картини и светлинни ефекти"} />

            <div className="px-4 pb-10 sm:pt-6 sm:pb-12 sm:px-0 body-font max-w-5xl mx-auto">
                <h1 className="text-lg sm:text-2xl text-center lh-6 ld-04 font-bold text-white">
                    {/* Винаги сме готови да оцветим вашия празник! Композираме и индивидуално шоу по ваши песни! */}
                    FUSION ШОУ
                </h1>
            </div>
            <div>
                <p className="text-base sm:text-lg text-white mb-6">
                    Изготвихме нов иновативен проект, на шоу непоказвано в България.
                </p>

                <p className="text-base sm:text-lg text-white mb-6">
                    То представлява впечатляващо визуално шоу, комбиниращо мултимедийни картини и светлинни ефекти,
                    съчетани със специални лазерни проекции, квантови светлини и въздействащо музикално оформление,
                    режисирано индивидуално за спектакъла.
                </p>

                <p className="text-base sm:text-lg text-white mb-6">
                    Цялостната идея на представлението е - атрактивно пренасяне на публиката през знакови моменти и места от историята ни,
                    природни забележителности и  някои достижения на известни българи.
                </p>

                <p className="text-base sm:text-lg text-white mb-6">
                    Надяваме се да покажем на публиката нов, различен формат.
                </p>
            </div>

            <CategoryMedia category={"fusion-show"} />

        </PagesLayout>
    );
}

export default FusionShow;
