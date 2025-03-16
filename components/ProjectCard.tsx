"use client";

import Link from 'next/link'
import { useState } from 'react';
interface Project {
    projectduration: string;
    id: number;
    title: string;
    dateofcompletion: string;
    price: string;
    favorite: boolean;
    description: string
}

interface Props {
    projects?: Project[];
}


export default function ProjectCard({ projects }: Props) {
    // const projects = props;
    const [hamid, setHamid]=useState(projects)

    return (
        <div dir="rtl" className="grid text-right justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
            {hamid && hamid.map((project: Project) => (
                <div key={project.id} className="bg-gray-200 w-[100%] max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="grid grid-rows-3 gap-8 px-6 py-4">
                        <div className="flex justify-between">
                            <Link href={`project/${project.id}`} className="text-gray-950 font-bold text-xl py-0.5 cursor-pointer  hover:text-sky-700">{project.title}</Link>
                            <div className="italic py-2 text-right text-sm text-gray-600">{project.projectduration} ماه </div>
                        </div>
                        <div className="italic text-right rtl:">{project.dateofcompletion}</div>
                        <div className="flex justify-between">
                            <div className="italic font-semibold py-1">{project.price} تومان</div>
                            <div className={project.favorite ? "text-yellow-500 cursor-pointer" : "text-gray-400"}>
                                <div className="text-3xl cursor-pointer">&#9733;</div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}

        </div>
    )
}

