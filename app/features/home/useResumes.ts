import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";

export function useResumes() {
  const { kv } = usePuterStore();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchResumes() {
      setIsLoading(true);
      try {
        const result = (await kv.list("resume:*", true)) as KVItem[];
        const parsed = result?.map((item) => JSON.parse(item.value) as Resume);
        setResumes(parsed || []);
      } catch (error) {
        console.error("Failed to fetch resumes", error);
        setResumes([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchResumes();
  }, []);

  return { resumes, isLoading };
}
