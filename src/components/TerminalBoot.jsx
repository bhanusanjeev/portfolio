import { useEffect, useState } from "react";

const bootMessages = [
  "Initializing Portfolio...",
  "Loading React Modules...",
  "Loading Django Backend...",
  "Connecting to GitHub...",
  "Loading AI Components...",
  "Optimizing User Experience...",
  "Portfolio Ready ✔",
];

const TerminalBoot = ({ onComplete }) => {
  const [visibleMessages, setVisibleMessages] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleMessages((prev) => [...prev, bootMessages[index]]);

      index++;

      if (index === bootMessages.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="space-y-3 font-mono">
      {visibleMessages.map((message, index) => (
        <p
          key={index}
          className="text-green-400"
        >
          {">"} {message}
        </p>
      ))}

      <span className="animate-pulse text-white">
        █
      </span>
    </div>
  );
};

export default TerminalBoot;