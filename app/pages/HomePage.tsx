import Resumes from "~/features/home/Resumes";
import AppLayout from "~/ui/AppLayout";
import Hero from "~/features/home/Hero";

export default function HomePage() {
  return (
    <AppLayout>
      <Hero />
      <Resumes />
    </AppLayout>
  );
}
