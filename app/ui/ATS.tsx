import { cn } from "~/lib/utils";
import React, { createContext, useContext } from "react";

type Suggestion = { type: "good" | "improve"; tip: string };
type ATSContextType = { score: number };

const ATSContext = createContext<ATSContextType | null>(null);
const useATS = () => {
  const context = useContext(ATSContext);
  if (!context)
    throw new Error("ATS compound components must be used within <ATS.Root />");
  return context;
};

function Root({
  score,
  children,
}: {
  score: number;
  children: React.ReactNode;
}) {
  const gradient =
    score > 69
      ? "from-green-100"
      : score > 49
        ? "from-yellow-100"
        : "from-red-100";

  return (
    <ATSContext.Provider value={{ score }}>
      <div
        className={cn(
          "rounded-2xl shadow-md w-full bg-gradient-to-b to-light-white p-8 flex flex-col gap-4",
          gradient
        )}
      >
        {children}
      </div>
    </ATSContext.Provider>
  );
}

function Header() {
  const { score } = useATS();

  const icon =
    score > 69
      ? "/icons/ats-good.svg"
      : score > 49
        ? "/icons/ats-warning.svg"
        : "/icons/ats-bad.svg";

  return (
    <div className="flex flex-row gap-4 items-center">
      <img src={icon} alt="ATS icon" className="w-10 h-10" />
      <p className="text-2xl font-semibold">ATS Score - {score}/100</p>
    </div>
  );
}

function Description() {
  return (
    <>
      <p className="font-medium text-xl">
        How well does your resume pass through Applicant Tracking Systems?
      </p>
      <p className="text-lg text-gray-500">
        Your resume was scanned like an employer would. Here's how it performed:
      </p>
    </>
  );
}

function Suggestions({ list }: { list: Suggestion[] }) {
  return (
    <div className="flex flex-col gap-2">
      {list.map((suggestion, i) => (
        <div className="flex items-center gap-2" key={i}>
          <img
            src={
              suggestion.type === "good"
                ? "/icons/check.svg"
                : "/icons/warning.svg"
            }
            alt="suggestion icon"
            className="w-4 h-4"
          />
          <p className="text-lg text-gray-500">{suggestion.tip}</p>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <p className="text-lg text-gray-500">
      Want a better score? Improve your resume by applying the suggestions
      listed above.
    </p>
  );
}

export const ATS = {
  Root,
  Header,
  Description,
  Suggestions,
  Footer,
};
