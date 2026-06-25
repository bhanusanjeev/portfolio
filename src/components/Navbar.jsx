import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      title: "Bhanu",
      href: "#hero",
    },
    {
      title: "GitHub",
      href: "#github",
    },
    {
      title: "Work",
      href: "#projects",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <>
      {/* ================= Desktop Navbar ================= */}

      <motion.header
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          top-5
          left-1/2
          -translate-x-1/2
          z-50
          w-[95%]
          max-w-5xl
        "
      >
        <nav
          className="
            rounded-full
            border
            border-neutral-200/80
            bg-white/70
            backdrop-blur-2xl
            shadow-[0_10px_35px_rgba(0,0,0,0.08)]
            px-4
            py-3
            sm:px-6
            sm:py-4
            md:px-10
            md:py-5
          "
        >
          {/* Desktop */}

          <div className="hidden md:flex items-center justify-evenly">
            {navItems.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  px-2
                  py-1
                  text-base
                  lg:text-lg
                  font-medium
                  tracking-tight
                  text-neutral-700
                  transition-all
                  duration-300
                  hover:text-black
                "
              >
                {item.title}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    bg-black
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile */}

          <div className="flex items-center justify-between md:hidden">
            <a
              href="#hero"
              className="text-xl font-semibold tracking-tight"
            >
              Bhanu
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-full p-2 hover:bg-neutral-100 transition"
            >
              <HiOutlineMenuAlt4 size={28} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ================= Mobile Overlay ================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-white
            "
          >
            {/* Top */}

            <div className="flex items-center justify-between p-8">
              <h2 className="text-2xl font-semibold">
                Bhanu
              </h2>

              <button
                onClick={() => setMenuOpen(false)}
              >
                <HiOutlineX size={34} />
              </button>
            </div>

            {/* Links */}

            <div className="mt-20 flex flex-col items-center gap-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                    text-5xl
                    font-medium
                    tracking-tight
                  "
                >
                  {item.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;