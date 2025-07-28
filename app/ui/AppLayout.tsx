import type { ReactNode } from "react";
import Navbar from "./Navbar";

export default function AppLayout({ children }: { children?: ReactNode }) {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">{children}</section>
    </main>
  );
}
