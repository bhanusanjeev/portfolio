import { motion } from "framer-motion";
import portrait from "../assets/images/portrait.png"; // Replace with your image

const Portrait = () => {
  return (
    <section
      className="
        flex
        items-center
        justify-center
        px-6
        py-24
        md:py-32
        lg:py-40
      "
    >
      <div
        className="
          w-full
          max-w-6xl
          flex
          flex-col
          items-center
        "
      >
        {/* Small Caption */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mb-10

            text-center

            text-sm
            md:text-base

            text-neutral-500

            tracking-wide
          "
        >
          Building products with purpose.
          <br />
          React. Django. AI.
        </motion.p>

        {/* Portrait */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.015,
          }}
          className="
            overflow-hidden
            rounded-[2rem]
          "
        >
          <img
            src={portrait}
            alt="Bhanu Sanjeev"
            className="
              h-auto
              w-[320px]

              sm:w-[420px]

              md:w-[520px]

              lg:w-[620px]

              object-cover

              grayscale

              transition-all
              duration-500

              hover:grayscale-0
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Portrait;