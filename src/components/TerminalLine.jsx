import { useState } from "react";
import { motion } from "framer-motion";
import TypingText from "./TypingText";

const TerminalLine = ({
  command,
  output,
  type,
  isActive,
  isVisible,
  onComplete,
}) => {
  const [typingCompleted, setTypingCompleted] = useState(false);

  // Don't render future lines yet
  if (!isVisible) return null;

  const handleTypingComplete = () => {
    setTypingCompleted(true);

    // Wait a little before moving to the next command
    setTimeout(() => {
      onComplete?.();
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      {/* Command */}

      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="text-green-400">
          bhanu@portfolio:~$
        </span>

        <span className="text-neutral-100">
          {isActive || typingCompleted ? (
            <TypingText
              text={command}
              speed={50}
              onComplete={handleTypingComplete}
            />
          ) : null}
        </span>
      </div>

      {/* Output */}

      {typingCompleted && type === "text" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl text-neutral-100"
        >
          {output}
        </motion.p>
      )}

      {typingCompleted && type === "list" && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          {output.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.08,
                duration: 0.25,
              }}
              whileHover={{ scale: 1.05 }}
              className="
                rounded-md
                bg-neutral-800
                px-4
                py-2
                text-sm
                text-neutral-200
                transition-colors
                duration-300
                hover:bg-neutral-700
              "
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TerminalLine;