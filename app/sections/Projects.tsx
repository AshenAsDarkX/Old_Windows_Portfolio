import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import { createClient } from "@/utils/supabase/server";

export default async function Projects() {
  const supabase = await createClient();

  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error.message);
    return <div className="p-10 text-red-500">Failed to load projects.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center pt-28">
      <h2 className="pb-10 text-3xl font-bold lg:text-5xl">Projects</h2>
      {projects?.length === 0 && (
        <p className="italic text-gray-500">
          Come on Ashen! There is nothing here did you delete everything or did
          you lend you password to someone?
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-2">
        {projects.map((project, key) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image_url}
              desc={project.description}
              text="Github"
              link={project.github_link}
              projectTechnologies={project.tech_stack}
            />
          );
        })}
      </div>
    </div>
  );
}
