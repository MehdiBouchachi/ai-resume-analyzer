import Resumes from "~/pages/Resumes";
import Navbar from "./Navbar";
import Hero from "~/ui/Hero";
import Main from "~/ui/Main";

export default function AppLayout() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <Main />
    </main>
  );
}
