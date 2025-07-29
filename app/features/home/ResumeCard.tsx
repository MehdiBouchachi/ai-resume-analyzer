import { useEffect, useState } from "react";
import { Link } from "react-router";
import { usePuterStore } from "~/lib/puter";
import ResumeCardLayout from "~/ui/ResumeCardLayout";
import { useResumeImage } from "./useResumeImage";

export default function ResumeCard({ resume }: { resume: Resume }) {
  const {
    id: resumeId,
    companyName,
    jobTitle,
    imagePath,
    feedback: { overallScore },
  } = resume;

  const resumeUrl = useResumeImage(imagePath);

  return (
    <Link to={`/resume/${resumeId}`}>
      <ResumeCardLayout>
        <ResumeCardLayout.Header
          jobTitle={jobTitle || ""}
          companyName={companyName || ""}
          atsScore={overallScore}
        />
        <ResumeCardLayout.Image src={resumeUrl} />
      </ResumeCardLayout>
    </Link>
  );
}
