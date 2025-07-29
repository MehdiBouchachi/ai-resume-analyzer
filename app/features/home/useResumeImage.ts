import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";

export function useResumeImage(path: string) {
  const { fs } = usePuterStore();
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    if (!path) return;

    async function loadImage() {
      try {
        const blob = await fs.read(path);
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        setResumeUrl(url);
      } catch (error) {
        console.error("Failed to load resume image:", error);
      }
    }

    loadImage();
  }, [fs, path]);

  return resumeUrl;
}
