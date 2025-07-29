import { Link } from "react-router";
import ResumeCardHeader from "./ResumeCardHeader";
import ResumeCardImage from "./ResumeCardImage";
import { usePuterStore } from "~/lib/puter";
import { useEffect, useState } from "react";

export default function ResumeCard({ resume }: { resume: Resume }) {
  const {
    id: resumeId,
    companyName,
    jobTitle,
    imagePath,
    feedback: { overallScore },
  } = resume;

  const { fs } = usePuterStore();
  const [resumeUrl, setResumeUrl] = useState("");
  useEffect(() => {
    async function loadResume() {
      const blob = await fs.read(imagePath);
      if (!blob) return;
      let url = URL.createObjectURL(blob);
      setResumeUrl(url);
    }
    loadResume();
  }, [imagePath]);

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
      {resumeUrl && <ResumeCardImage imagePath={resumeUrl} />}
    </Link>
  );
}
