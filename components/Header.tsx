export default function Header() {
    return (
        <header>
            <nav className="bg-gray-950 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Mamad</span>
                    </a>
                    <div  dir="rtl" className=" block w-auto" id="navbar-default">
                        <ul className="font-medium flex gap-3.5">
                            <li>
                                <a href="" className="text-gray-100" aria-current="page">خانه</a>
                            </li>
                            <li>
                                <a href="" className="text-gray-100" aria-current="page">محصول</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}