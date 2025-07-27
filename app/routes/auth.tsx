import Authentication from "~/features/authentication/Authentication";
import type { Route } from "./+types/auth";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind | Auth" },
    { name: "description", content: "Log into your account" },
  ];
}

export default function Auth() {
  return <Authentication />;
}
