import React from 'react'
import ImageGallery from '../components/ImageGallery';
import { categoryImages } from '../constants';
import PagesLayout from '../components/PagesLayout';
import Meta from '../components/Meta';
import CategoryMedia from '../components/CategoryMedia';


//for newline add whitespace-pre-line and use inside text {"\n"} 
const Koncerti = () => {
    return (
        <PagesLayout>

            <Meta title={"организира на концерти"} description={"организира концерти на открито и закрито по повод различни събития"} />

            <div className="px-4 pb-10 sm:pt-4 sm:pb-20 sm:px-0 text-gray-600 body-font max-w-5xl mx-auto">
                <h1 className="text-lg sm:text-4xl text-center lh-6 ld-04 font-bold text-white">
                    ОРГАНИЗИРАНЕ НА КОНЦЕРТИ
                </h1>
            </div>
            <div>
                <p className="text-base sm:text-2xl text-white mb-6">
                    От 2012 г. продуцентска къща „Феникс” организира концерти на открито и закрито по повод различни събития и празници на градове в цялата страна.
                </p>

                <p className="text-base sm:text-2xl text-white mb-6">
                    Стремежът на нашия екип е винаги  да предлагаме гъвкава организация на събитието, според изискванията на клиента - съобразно повода, вкуса, предвидената зрителска аудитория, бюджетните рамки и др.

                </p>

                <p className="text-base sm:text-2xl text-white mb-6">
                    Въпреки всички тези рамки нашите сцени винаги се различават с наш собствен стил - наличие на мултимедийни екрани, на които текат ваши рекламни материали, споменава се кой е организатор и спонсор на събитието, различни фонови ефекти, директни заснемания на сцената и публиката от камери в близък и далечен план и др.
                </p>

                <p className="text-base sm:text-2xl text-white mb-6">
                    За сцените ни използваме различни украси, декорации, оръдия за конфети, сценични фонтани и огньове и други ефекти.
                </p>

                <p className="text-base sm:text-2xl  text-white mb-6">
                    За реализацията на концертите работим с почти всички български и някои чуждестранни изпълнители от различни жанрове.
                </p>

                <p className="text-base sm:text-2xl  text-white mb-6">
                    Цените на всеки концерт са индивидуални в зависимост от хонорара на изпълнителя, големината на сцената и нейната аранжировка, силата на звука, налечието на екрани и др.
                </p>


            </div>

            <CategoryMedia category={"koncerti"}/>
            
        </PagesLayout>
    );
}

export default Koncerti;
