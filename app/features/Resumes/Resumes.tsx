import { resumes } from "~/constants";
import ResumeCard from "./ResumeCard";

export default function Resumes() {
  if (resumes.length === 0) return;
  return (
    <section className="resumes-section">
      {resumes.map((resume) => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}
    </section>
  );
}
