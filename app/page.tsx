import FliterProjects from "@/components/FilterProjects";
import ProjectCard from "@/components/ProjectCard";


export default async function Home() {

  const res = await fetch("http://localhost:3001/projects")
  const projects = await res.json()

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-10">
          <FliterProjects ></FliterProjects>
          <ProjectCard projects={projects}></ProjectCard>
        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  );
}
