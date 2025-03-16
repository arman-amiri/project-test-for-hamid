"use client"

import { useRouter, useSearchParams } from "next/navigation";

export default function FliterProjects() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const currentStatus = searchParams.get('state') || '';
    const currentTitle = searchParams.get('title') || '';

    return (
        <div dir="rtl" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 text-cyan-50 place-items-center py-4 rounded-2xl bg-gray-950 mt-5">
            <div className="col-span-1 lg:col-span-2">
                <input
                    type="search"
                    className="text-right relative w-full min-w-0 flex-auto rounded border border-solid text-gray-200 border-gray-200 bg-gray-800 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-300 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    id="exampleSearch"
                    placeholder="جستجو" />
            </div>
            <div className="col-span-1 lg:col-span-1">
                <form className="max-w-sm mx-auto">
                    <select className="w-[220px] lg:w-[200px] text-right bg-gray-800 border border-gray-300 text-gray-400 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>وضعیت</option>
                        <option>شروع نشده</option>
                        <option>تایید شده</option>
                        <option>در حال انجام</option>
                        <option>تحویل داده شده</option>
                    </select>
                </form>
            </div>
            <div className="max-lg:hidden lg:col-span-1"></div>
            <div className="col-span-1 lg:col-span-1">
                <div className="flex items-center me-4">
                    <label className="px-2 w-[100%] text-md font-medium text-gray-400">علاقه مندی</label>
                    <input type="checkbox" className="w-5 h-5 text-teal-600 bg-gray-100 border-gray-300 rounded-sm" />
                </div>
            </div>
            <div className="col-span-1 lg:col-span-1">
                <button className="bg-[#96F207] hover:bg-[#98f207de] text-gray-600 duration-300 hover:text-gray-200 py-2 px-4 rounded">
                    جستجو
                </button>
            </div>
        </div>
    )
}