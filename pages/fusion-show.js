import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';
import ImageGallery from '../components/ImageGallery';
import { categoryImages } from '../constants';
import PagesLayout from '../components/PagesLayout';
import Meta from '../components/Meta';


//for newline add whitespace-pre-line and use inside text {"\n"} 
const Gallery = () => {
    return (
        <PagesLayout>

            <Meta title={"fusion шоу - впечатляващо визуално шоу"} description={"впечатляващо визуално шоу, комбиниращо мултимедийни картини и светлинни ефекти"} />
            
            <div className="px-4 pb-12 sm:pt-4 sm:pb-20 sm:px-0 text-gray-600 body-font max-w-5xl mx-auto">
                <h1 className="text-2xl   sm:text-4xl text-center lh-6 ld-04 font-bold text-white">
                    {/* Винаги сме готови да оцветим вашия празник! Композираме и индивидуално шоу по ваши песни! */}
                    FUSION ШОУ
                </h1>
            </div>
            <div>
                <p className="text-xl sm:text-2xl text-white mb-6">
                    Изготвихме нов иновативен проект, на шоу непоказвано в България.
                </p>

                <p className="text-xl sm:text-2xl text-white mb-6">
                    То представлява впечатляващо визуално шоу, комбиниращо мултимедийни картини и светлинни ефекти,
                    съчетани със специални лазерни проекции, квантови светлини и въздействащо музикално оформление,
                    режисирано индивидуално за спектакъла.
                </p>

                <p className="text-xl sm:text-2xl text-white mb-6">
                    Цялостната идея на представлението е - атрактивно пренасяне на публиката през знакови моменти и места от историята ни,
                    природни забележителности и  някои достижения на известни българи.
                </p>

                <p className="text-xl sm:text-2xl text-white mb-6">
                    Надяваме се да покажем на публиката нов, различен формат.
                </p>
            </div>
            {/* <div className="py-14">
                <ImageGallery images={categoryImages["lazeri"]} />
            </div> */}
        </PagesLayout>
    );
}

export default Gallery;
