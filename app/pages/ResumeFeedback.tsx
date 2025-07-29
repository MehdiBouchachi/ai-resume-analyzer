import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import FeedbackSection from "~/features/resumefeedback/feedback/FeedbackSection";
import { useResumeData } from "~/features/resumefeedback/feedback/useResumeData";
import ResumeSection from "~/features/resumefeedback/resume/ResumeSection";
import ResumeNav from "~/features/resumefeedback/ResumeNav";
import { usePuterStore } from "~/lib/puter";

export default function ResumeFeedback() {
  const navigate = useNavigate();
  const { auth, isLoading } = usePuterStore();
  const { id } = useParams();
  const { resumeUrl, imageUrl, feedback } = useResumeData(id);
  useEffect(() => {
    if (isLoading && !auth.isAuthenticated) {
      navigate(`/auth?next=/resume/${id}`);
    }
  }, [isLoading]);

  return (
    <main className="!pt-0">
      <ResumeNav />
      <div className="flex flex-row w-full max-lg:flex-col-reverse">
        <ResumeSection imageUrl={imageUrl} resumeUrl={resumeUrl} />
        <FeedbackSection feedback={feedback} />
      </div>
    </main>
  );
}
