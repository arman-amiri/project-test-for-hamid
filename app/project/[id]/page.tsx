// import { useParams } from "next/navigation";
export default async function ProductDetail({ params }: { params: { id: any } }) {

    const res = await fetch(`http://localhost:3001/projects/${params.id}`)
    const projectdetail = await res.json()

    return (
        <>
            <div dir="rtl" className="grid grid-cols-12 text-gray-300 py-6">
                <div className="col-span-1"></div>
                <div className="col-span-10">
                    <div className="italic text-4xl">{projectdetail.title}</div>
                    <div className="text-xl/10 text-justify pt-10">{projectdetail.description}</div>
                    <div className="flex justify-between py-5">
                        <div className="text-[18px] text-md text-left">نوشته شده توسط {projectdetail.producer}</div>
                        <div className="text-[18px]">مدت زمان انجام :{projectdetail.projectduration} ماه</div>
                    </div>
                    <div className="flex justify-between py-5">
                        <div className="text-[18px] text-left">تاریخ اتمام پروژه : {projectdetail.dateofcompletion}</div>
                        <div className="text-2xl">{projectdetail.price} تومان</div>
                    </div>
                    <div className="grid grid-cols-10 max-md:grid-cols-1  max-md:gap-4 place-items-center mt-10 mb-5">
                        <div dir="ltr" className="col-span-7 max-md:col-span-1 w-full bg-gray-300 rounded-full h-2.5">
                            {/* {projectdetail.status === "notstarted" ? (
                                <div className="bg-[#98f207df] h-2.5 rounded-full w-[40%]"></div>
                            )} */}

                            <div>
                                {projectdetail.status === "notstarted" ? (
                                    <div className="bg-[#98f207df] h-2.5 rounded-full w-[10%]"></div>
                                ) : projectdetail.status === "inprogress" ? (
                                    <div className="bg-[#98f207df] h-2.5 rounded-full w-[40%]"></div>
                                ) : projectdetail.status === "delivered" ? (
                                    <div className="bg-[#98f207df] h-2.5 rounded-full w-[75%]"></div>
                                ) : (
                                    <div className="bg-[#07f25df4] h-2.5 rounded-full w-[100%]"></div>
                                )}
                            </div>


                        </div>
                        {/*  */}
                        {projectdetail.status === "notstarted" ? (
                            <div className="col-span-2  max-md:col-span-1 text-lg">شروع نشده</div>
                        ) : projectdetail.status === "inprogress" ? (
                            <div className="col-span-2  max-md:col-span-1 text-lg">در حال انجام</div>
                        ) : projectdetail.status === "delivered" ? (
                            <div className="col-span-2  max-md:col-span-1 text-lg">تحویل داده شده</div>
                        ) : (
                            <div className="col-span-2  max-md:col-span-1 text-lg">تایید شده</div>
                        )}
                        <div className="col-span-1 max-md:col-span-1">
                            <div className="text-yellow-500">
                                <div className="text-3xl">&#9733;</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
        </>
    )
}