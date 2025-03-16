import Home from "./_components/home";

export default async function HomePage() {
  const res = await fetch("http://localhost:3001/projects");
  const projects = await res.json();

  return (
    <>
      {/* <div className="grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-10">
          <FliterProjects />
          <ProjectCard projects={projects} />
        </div>
        <div className="col-span-1"></div>
      </div> */}
      <Home projects={projects} />
    </>
  );
}
