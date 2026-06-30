import { useState } from "react";

import terminalData from "../data/TerminalData";

import TerminalWindow from "./TerminalWindow";
import TerminalBoot from "./TerminalBoot";
import TerminalLine from "./TerminalLine";

const About = () => {
  const [bootCompleted, setBootCompleted] = useState(false);

  // Which terminal line is currently active
  const [activeLine, setActiveLine] = useState(0);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            About
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-neutral-900 md:text-7xl">
            More than just
            <br />
            writing code.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-neutral-600">
            I enjoy building modern web applications with thoughtful UI,
            scalable architecture and AI-powered experiences that solve
            real-world problems.
          </p>
        </div>

        {/* Terminal */}

        <TerminalWindow>
          {!bootCompleted ? (
            <TerminalBoot
              onComplete={() => {
                setBootCompleted(true);
                setActiveLine(0);
              }}
            />
          ) : (
            <div className="space-y-12">
              {terminalData.map((item, index) => (
                <TerminalLine
                  key={item.id}
                  command={item.command}
                  output={item.output}
                  type={item.type}

                  isActive={activeLine === index}

                  isVisible={activeLine >= index}

                  onComplete={() => {
                    if (index < terminalData.length - 1) {
                      setActiveLine(index + 1);
                    }
                  }}
                />
              ))}

              {activeLine >= terminalData.length - 1 && (
                <div className="flex items-center">
                  <span className="animate-pulse text-xl text-white">
                    █
                  </span>
                </div>
              )}
            </div>
          )}
        </TerminalWindow>

        {/* Stats */}

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          <div className="rounded-3xl border border-neutral-200 p-8 text-center transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-4xl font-bold">6+</h3>
            <p className="mt-2 text-neutral-500">Projects</p>
          </div>

          <div className="rounded-3xl border border-neutral-200 p-8 text-center transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="mt-2 text-neutral-500">DSA Problems</p>
          </div>

          <div className="rounded-3xl border border-neutral-200 p-8 text-center transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-4xl font-bold">8.2</h3>
            <p className="mt-2 text-neutral-500">CGPA</p>
          </div>

          <div className="rounded-3xl border border-neutral-200 p-8 text-center transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-4xl font-bold">2026</h3>
            <p className="mt-2 text-neutral-500">Graduate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;