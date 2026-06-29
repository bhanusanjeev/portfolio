import projects from "../data/projects";
import ProjectShowcase from "./ProjectShowcase";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-white py-20"
    >
      {/* Section Heading */}

      <div className="mb-24 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          Selected Work
        </p>

        <h2 className="mt-6 text-5xl font-bold tracking-tight text-neutral-900 md:text-7xl">
          Featured Projects
        </h2>
      </div>

      {/* Projects */}

      {projects.map((project) => (
        <ProjectShowcase
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
};

export default Projects;