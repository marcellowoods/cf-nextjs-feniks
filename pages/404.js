import Link from 'next/link';

export default function Error() {
    return (
        <div className="">



            <div className="flex flex-col justify-center mx-auto mt-52 text-center max-w-2x1">
                <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                    404 – Грешка
                </h1>
                <br />
                <Link href="/">
                    <a
                        className="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4"
                    >
                        Върни се в начална страница
                    </a>
                </Link>
            </div>
            <div className="mt-64"></div>

        </div>
    );
}
