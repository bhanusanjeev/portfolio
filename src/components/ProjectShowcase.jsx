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
<div
  className="
    mt-16

    overflow-hidden

    rounded-[40px]

    bg-[#F6F6F6]

    p-4

    md:p-8

    shadow-[0_10px_40px_rgba(0,0,0,0.05)]

    transition-all
    duration-500

    hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
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

        {/* Bottom Bar */}

<div
  className="
    mt-10

    flex
    flex-col
    gap-6

    rounded-3xl
    bg-neutral-100

    px-6
    py-6

    md:flex-row
    md:items-center
    md:justify-between
    md:rounded-full
    md:px-8
  "
>
<div className="flex flex-wrap justify-center gap-3 md:justify-start">
                {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

<div className="flex justify-center gap-8">            <a
              href={project.live}
              className="font-medium transition hover:opacity-60"
            >
              Live →
            </a>

            <a
              href={project.github}
              className="font-medium transition hover:opacity-60"
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