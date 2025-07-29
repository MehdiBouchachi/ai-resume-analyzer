import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";
import Loader from "~/ui/Loader";
import UploadButton from "~/ui/UploadButton";
import ResumeCard from "./ResumeCard";
import { useResumes } from "./useResumes";

export default function Resumes() {
  const { resumes, isLoading } = useResumes();
  if (isLoading) return <Loader />;
  if (resumes.length === 0) return <UploadButton />;

  return (
    <section className="resumes-section">
      {resumes.map((resume) => (
        <ResumeCard key={resume.id} resume={resume} />
      ))}
    </section>
  );
}
