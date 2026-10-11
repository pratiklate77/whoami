import { getExperience, getProfile, getProjects } from "@/lib/content";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  const profile = getProfile();
  const projects = getProjects();
  const experience = getExperience();

  return (
    <main className="min-h-dvh">
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills />
      <Projects projects={projects} />
      <Experience experience={experience} />
      <Contact profile={profile} />
    </main>
  );
}
