import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";

export function useResumeData(id: string | undefined) {
  const { kv, fs } = usePuterStore();
  const [resumeUrl, setResumeUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadResume = async () => {
      try {
        const resume = await kv.get(`resume:${id}`);
        if (!resume) return;

        const data = JSON.parse(resume);

        const resumeBlob = await fs.read(data.resumePath);
        if (!resumeBlob) return;
        const pdfBlob = new Blob([resumeBlob], { type: "application/pdf" });
        setResumeUrl(URL.createObjectURL(pdfBlob));

        const imageBlob = await fs.read(data.imagePath);
        if (!imageBlob) return;
        setImageUrl(URL.createObjectURL(imageBlob));

        setFeedback(data.feedback);
      } catch (error) {
        console.error("Failed to load resume data", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadResume();
  }, [id]);

  return {
    resumeUrl,
    imageUrl,
    feedback,
    isLoading,
  };
}
