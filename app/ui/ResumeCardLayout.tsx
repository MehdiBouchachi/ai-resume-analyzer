import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { cn } from "~/lib/utils";
import ScoreBadge from "~/ui/ScoreBadge";
import ScoreCircle from "./ScoreCircle";

interface ResumeCardProps {
  children: ReactNode;
  className?: string;
}
const ResumeCardContext = createContext<Resume | null>(null);

function ResumeCardLayout({ children, className = "" }: ResumeCardProps) {
  return (
    <div className={cn("resume-card", className)}>
      <ResumeCardContext.Provider value={null}>
        {children}
      </ResumeCardContext.Provider>
    </div>
  );
}

function Image({ src }: { src: string }) {
  return (
    <div className="gradient-border animate-in fade-in duration-1000">
      <div className="w-full h-full">
        <img
          src={src}
          alt="resume"
          className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
        />
      </div>
    </div>
  );
}

function Header({
  jobTitle,
  companyName,
  atsScore,
}: {
  jobTitle: string;
  companyName: string;
  atsScore: number;
}) {
  return (
    <div className="resume-card-header">
      <div className="flex flex-col gap-1">
        {companyName && (
          <h2 className="text-xl font-semibold">{companyName}</h2>
        )}
        {jobTitle && <p className="text-md text-gray-500">{jobTitle}</p>}
        {!jobTitle && !companyName && (
          <h2 className="!text-black font-bold">Resume</h2>
        )}
      </div>
      <ScoreCircle score={atsScore} />
    </div>
  );
}

function Footer({ children }: { children: ReactNode }) {
  return <div className="flex justify-end w-full">{children}</div>;
}

ResumeCardLayout.Image = Image;
ResumeCardLayout.Header = Header;
ResumeCardLayout.Footer = Footer;

export default ResumeCardLayout;
