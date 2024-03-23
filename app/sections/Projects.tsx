import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center pt-28">
      <h2 className="pb-10 text-3xl font-bold lg:text-5xl">Projects</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {projects.map((project, key) => {
          return (
            <ProjectCard
              key={key}
              title={project.title}
              image={project.image}
              desc={project.description}
              text={project.buttonText}
              link={project.link}
              projectTechnologies={project.technologies}
            />
          );
        })}
      </div>
    </div>
  );
}
