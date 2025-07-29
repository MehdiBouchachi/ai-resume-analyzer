import { useCallback } from "react";
import { useNavigate } from "react-router";
import { analyzeResume } from "~/lib/services/analyzeResumeService";

export function useAnalyzeResume({
  setIsProcessing,
  setStatusText,
}: {
  setIsProcessing: (state: boolean) => void;
  setStatusText: (text: string) => void;
}) {
  const navigate = useNavigate();
  return useCallback(
    async ({
      file,
      companyName,
      jobTitle,
      jobDescription,
    }: {
      file: File;
      companyName: string;
      jobTitle: string;
      jobDescription: string;
    }) => {
      try {
        setIsProcessing(true);
        const result = await analyzeResume({
          file,
          companyName,
          jobTitle,
          jobDescription,
          setStatusText,
        });

        if (result?.id) {
          navigate(`/resume/${result.id}`);
        }
        return result;
      } catch (err: any) {
        setStatusText("Error: " + err.message);
      } finally {
        setIsProcessing(false);
      }
    },
    [setIsProcessing, setStatusText]
  );
}
