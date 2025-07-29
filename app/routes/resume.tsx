import ResumeFeedback from "~/pages/ResumeFeedback";
import type { Route } from "./+types/resume";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind | Review" },
    {
      name: "description",
      content: "Detailed overview of your resume",
    },
  ];
}
export default function resume() {
  return <ResumeFeedback />;
}
