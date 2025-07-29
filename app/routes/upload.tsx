import Upload from "~/pages/Upload";
import type { Route } from "./+types/upload";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind | upload" },
    {
      name: "description",
      content: "Upload your CV and get feedback for your dream job!",
    },
  ];
}
export default function upload() {
  return <Upload />;
}
