import Hero from "~/ui/Hero";
import type { Route } from "./+types/home";
import Navbar from "~/ui/Navbar";
import AppLayout from "~/ui/AppLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <AppLayout />;
}
