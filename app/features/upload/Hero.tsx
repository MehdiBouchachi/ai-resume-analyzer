import { useState } from "react";
import AnalyzeResumeForm from "./AnalyzeResumeForm";
import Loader from "~/ui/Loader";

export default function Hero() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");

  return (
    <div className="page-heading py-16">
      <h1>Smart feedback for your dream job</h1>
      {isProcessing ? (
        <>
          <h2>{statusText}</h2>
          <Loader />
        </>
      ) : (
        <h2>Drop your resume for an ATS score and improvement tips</h2>
      )}
      {!isProcessing && (
        <AnalyzeResumeForm
          setIsProcessing={setIsProcessing}
          setStatusText={setStatusText}
        />
      )}
    </div>
  );
}
