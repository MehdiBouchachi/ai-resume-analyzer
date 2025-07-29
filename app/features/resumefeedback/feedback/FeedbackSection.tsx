import Summary from "./Summary";
import Details from "./Details";
import { ATS } from "~/ui/ATS";

export default function FeedbackSection({
  feedback,
}: {
  feedback: Feedback | null;
}) {
  return (
    <section className="feedback-section">
      <h2 className="text-4xl !text-black font-bold">Resume Review</h2>
      {feedback ? (
        <div className="flex flex-col gap-8 animate-in fade-in">
          <Summary feedback={feedback} />
          <ATS.Root score={feedback?.ATS?.score || 0}>
            <ATS.Header />
            <ATS.Description />
            <ATS.Suggestions list={feedback?.ATS?.tips || []} />
            <ATS.Footer />
          </ATS.Root>
          <Details feedback={feedback} />
        </div>
      ) : (
        <img src="/images/resume-scan-2.gif" className="w-full" />
      )}
    </section>
  );
}
