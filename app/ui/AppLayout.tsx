import Navbar from "./Navbar";
import Main from "~/ui/Main";

export default function AppLayout() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <Main />
    </main>
  );
}
