"use client";

import FilterProjects from "@/components/FilterProjects";
import ProjectCard from "@/components/ProjectCard";
import { IProject } from "@/interfaces";
import { FC, useEffect, useState } from "react";

interface Props {
  projects: IProject[];
}

const Home: FC<Props> = ({ projects: initialProjects }) => {
  // استیت برای ذخیره پروژه‌ها
  const [projects, setProjects] = useState<IProject[]>(initialProjects);

  // تابع برای مدیریت جستجو
  const handleSearch = async ({
    search,
    state,
    favorite,
  }: {
    search: string;
    state: string;
    favorite: boolean;
  }) => {
    try {
      // ساخت URL با پارامترهای فیلتر
      let url = "/projects"; // فرض کنید API شما در این آدرس قرار دارد
      const params = new URLSearchParams();

      if (search) params.set("search", search);
      if (state) params.set("state", state);
      if (favorite) params.set("favorite", favorite.toString());

      if (params.toString()) {
        url += `?${params.toString()}`;
      }
      console.log(url, "url");
      // ارسال درخواست GET به سرور
      const response = await fetch(`http://localhost:3001/${url}`, {
        method: "GET",
        mode: "no-cors", // غیرفعال کردن CORS
      });
      console.log(response, "response");
      if (!response.ok) {
        throw new Error("خطا در دریافت داده‌ها");
      }

      const data = await response.json();
      setProjects(data.projects); // به‌روزرسانی لیست پروژه‌ها
    } catch (error) {
      console.error("خطا:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-10">
          {/* ارسال تابع handleSearch به FilterProjects */}
          <FilterProjects onSearch={handleSearch} />
          <ProjectCard projects={projects} />
        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  );
};

export default Home;
