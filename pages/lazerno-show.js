import React from 'react'
import PagesLayout from '../components/PagesLayout';
import Meta from '../components/Meta';
import CategoryMedia from '../components/CategoryMedia';

const LazernoShow = () => {
    return (
        <PagesLayout>
            <Meta title={"Лазерно шоу"} description={"Лазерно шоу, светлинно шоу"} />
            <div>
                <div className="px-4 pb-10 sm:pt-6 sm:pb-12 body-font mx-auto">
                    <h1 className="text-lg sm:text-2xl text-center lh-6 ld-04 font-bold text-white">
                        {/* Винаги сме готови да оцветим вашия празник! Композираме и индивидуално шоу по ваши песни! */}
                        ЛАЗЕРНО ШОУ
                    </h1>
                </div>
                <p className="text-base sm:text-lg text-white mb-6">
                    Лазерното шоу е много ефектно синхронизиране на звук и светлина.
                    Представлявa спектакъл с визуални светлинни внушения което разчупва визията на мероприятието.

                </p>

                <p className="text-base sm:text-lg text-white mb-6">
                    Лазерното шоу може да съпътства всякакви сценични изяви.
                    Подходящо е за откриване и закриване на празници, концерти, фестивали и др.

                </p>

                <p className="text-base sm:text-lg text-white mb-6">
                    Ние сме единствения екип в страната, който прави лазерно шоу под съпровода на българска музика.
                </p>
            </div>

            <CategoryMedia category={"lazeri"} />

        </PagesLayout>
    );
}

export default LazernoShow;
