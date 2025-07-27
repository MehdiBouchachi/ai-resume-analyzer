import { usePuterStore } from "~/lib/puter";
import type { Route } from "./+types/home";
import AppLayout from "~/ui/AppLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();

  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth?next=/");
    }
  }, [auth.isAuthenticated]);
  return <AppLayout />;
}
