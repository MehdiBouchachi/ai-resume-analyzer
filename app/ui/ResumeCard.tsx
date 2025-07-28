import { Link } from "react-router";
import ResumeCardHeader from "./ResumeCardHeader";
import ResumeCardImage from "./ResumeCardImage";

export default function ResumeCard({ resume }: { resume: Resume }) {
  const {
    id: resumeId,
    resumePath,
    companyName,
    jobTitle,
    imagePath,
    feedback: { overallScore },
  } = resume;
  return (
    <Link
      to={`/resume/${resumeId}`}
      className="resume-card animate-in fade-in duration-100"
    >
      <ResumeCardHeader
        companyName={companyName ?? ""}
        overallScore={overallScore}
        jobTitle={jobTitle ?? ""}
      />
      <ResumeCardImage imagePath={imagePath} />
    </Link>
  );
}
