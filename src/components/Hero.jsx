const Hero = () => {
  return (
    <section
      id="hero"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        sm:px-8
        pt-32
        md:pt-40
      "
    >
      <div
        className="
          w-full
          max-w-7xl
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* Small Intro */}

        <p
          className="
            mb-6
            text-xs
            uppercase
            tracking-[0.3em]
            text-neutral-500
            sm:text-sm
          "
        >
          Portfolio 2026
        </p>

        {/* Main Heading */}

        <h1
          className="
            font-medium
            leading-[0.9]
            tracking-[-0.05em]
            text-neutral-900

            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-[7rem]
            xl:text-[8rem]
          "
        >
          Building
          <br />
          modern digital
          <br />
          experiences.
        </h1>

        {/* Description */}

        <p
          className="
            mt-8
            max-w-xs
            text-base
            leading-relaxed
            text-neutral-500

            sm:max-w-lg
            sm:text-lg

            md:max-w-2xl
            md:text-xl
          "
        >
          I'm Bhanu Sanjeev, a Full Stack Developer passionate about
          building scalable web applications using React, Django and
          modern AI technologies.
        </p>

        {/* CTA */}

        <a
          href="#projects"
          className="
            mt-10

            rounded-full
            border
            border-neutral-300

            px-6
            py-3

            text-base
            font-medium

            transition-all
            duration-300

            hover:scale-105
            hover:bg-black
            hover:text-white

            sm:px-8
            sm:py-4
            sm:text-lg
          "
        >
          Explore My Work →
        </a>

        {/* Image Placeholder */}

        <div
          className="
            mt-16

            h-72
            w-60

            rounded-[2rem]
            bg-neutral-200

            sm:h-96
            sm:w-80

            md:h-[520px]
            md:w-[420px]
            md:rounded-[2.5rem]
          "
        />
      </div>
    </section>
  );
};

export default Hero;