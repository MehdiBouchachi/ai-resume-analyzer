import React from "react";

export default function ResumeSection({
  imageUrl,
  resumeUrl,
}: {
  imageUrl: string;
  resumeUrl: string;
}) {
  return (
    <section className="feedback-section bg-[url('/images/bg-small.svg')] bg-cover h-[100vh] sticky top-0 items-center justify-center">
      {imageUrl && resumeUrl && (
        <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={imageUrl}
              className="w-full h-full object-contain rounded-2xl"
              title="resume"
            />
          </a>
        </div>
      )}
    </section>
  );
}
