
import Link from 'next/link';

const CategoryCard = ({ linkRef, title, description }) => {

    return (
        <Link href={linkRef}>
            <div className=" ktq4 cursor-pointer group bottom-0	">
                {/* <img className="w-10" src="https://nine4.app/favicon.png"></img> */}

                <h3 className="pb-3 text-xl  text-white group-hover:text-violet-700 font-bold tr04">
                    {title}
                </h3>

                <p className="pt-2 value-text text-lg text-gray-200  tr04">
                    {description}
                </p>
            </div>
        </Link>
    )
}

export default CategoryCard;