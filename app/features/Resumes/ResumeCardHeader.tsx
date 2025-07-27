import React from "react";
import ScoreCircle from "~/ui/ScoreCircle";

export default function ResumeCardHeader({
  companyName,
  jobTitle,
  overallScore,
}: {
  companyName: string;
  jobTitle: string;
  overallScore: number;
}) {
  return (
    <div className="resume-card-header">
      <div className="flex flex-col gap-2">
        <h2 className="!text-black font-bold break-words">{companyName}</h2>
        <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
      </div>
      <div className="flex-shrink-0">
        <ScoreCircle score={overallScore} />
      </div>
    </div>
  );
}
