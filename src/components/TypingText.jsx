import { useEffect, useRef, useState } from "react";

const TypingText = ({
  text,
  speed = 50,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");

  const completedRef = useRef(false);

  useEffect(() => {
    // Already finished
    if (completedRef.current) return;

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);

        completedRef.current = true;

        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
    </span>
  );
};

export default TypingText;