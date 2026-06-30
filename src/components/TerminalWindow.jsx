const TerminalWindow = ({ children }) => {
  return (
    <div
      className="
        mt-24

        overflow-hidden

        rounded-[32px]

        border
        border-neutral-800

        bg-[#111111]

        shadow-[0_25px_60px_rgba(0,0,0,0.25)]
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between

          border-b
          border-neutral-800

          bg-[#1A1A1A]

          px-6
          py-4
        "
      >
        {/* Mac Buttons */}

        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        {/* Terminal Title */}

        <p className="font-mono text-sm tracking-wide text-neutral-400">
          bhanu@portfolio:~
        </p>

        {/* Empty space for symmetry */}

        <div className="w-[60px]" />
      </div>

      {/* Terminal Body */}

      <div
        className="
          min-h-[550px]

          p-8

          font-mono

          md:p-14
        "
      >
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;