import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { ClickSparkWrapper } from "@/components/click-spark-wrapper";
import { BlobCursorWrapper } from "@/components/blob-cursor-wrapper";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <BlobCursorWrapper />
      <ClickSparkWrapper>
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
        </main>
        <Footer />
      </ClickSparkWrapper>
    </>
  );
}
