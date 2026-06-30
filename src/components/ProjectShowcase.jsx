const ProjectShowcase = ({ project }) => {
    console.log(project);
console.log(project.image);
  return (
    <section className="w-full py-24">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* Company */}

        <p className="mb-6 text-center text-lg font-semibold text-neutral-500">
          {project.company}
        </p>

        {/* Title */}

        <h2 className="mx-auto max-w-4xl whitespace-pre-line text-center text-5xl font-bold leading-tight tracking-tight text-neutral-900 md:text-7xl">
          {project.title}
        </h2>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-neutral-600">
          {project.description}
        </p>

        {/* Image Placeholder */}
{/* Screenshot */}

<div className="mt-16 -mx-6 md:mx-0">
  <div
    className="
      overflow-hidden

      rounded-[32px]

      bg-[#F6F6F6]

      p-2

      sm:p-3

      md:p-6

      lg:p-8

      shadow-[0_10px_40px_rgba(0,0,0,0.05)]

      transition-all
      duration-500
    "
  >
    <img
      src={project.image}
      alt={project.company}
      className="
        w-full
        h-auto

        rounded-[28px]

        transition-transform
        duration-700

        hover:scale-[1.015]
      "
    />
  </div>
</div>
{/* Bottom Bar */}

<div
  className="
    mt-6

    flex
    flex-col
    gap-4

    rounded-3xl
    bg-neutral-100

    px-5
    py-4

    md:flex-row
    md:items-center
    md:justify-between
    md:rounded-full
    md:px-8
    md:py-4
  "
>
  {/* Technologies */}

  <div className="flex flex-wrap justify-center gap-2 md:justify-start">
    {project.technologies.map((tech) => (
      <span
        key={tech}
        className="
          rounded-full
          bg-white

          px-4
          py-1.5

          text-sm
          font-medium

          shadow-sm
        "
      >
        {tech}
      </span>
    ))}
  </div>

  {/* Links */}

  <div className="flex justify-center gap-5">
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="
        font-medium
        text-black

        transition-all
        duration-300

        hover:opacity-60
      "
    >
      Live →
    </a>

    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="
        font-medium
        text-black

        transition-all
        duration-300

        hover:opacity-60
      "
    >
      GitHub →
    </a>
  </div>
</div>

      </div>
    </section>
    
  );
};
export default ProjectShowcase;