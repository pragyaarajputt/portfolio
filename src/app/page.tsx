import Nav from "@/components/Nav";
import ScrollManager from "@/components/ScrollManager";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Impact from "@/components/sections/Impact";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <main id="main">
        <Hero />
        {/* Framed column: thin rules down both sides, like the frame around a print. */}
        <div className="mx-auto max-w-6xl border-x border-white/[0.07]">
          <About />
          <Services />
          <Experience />
          <Projects />
          <Impact />
          <Skills />
          <Education />
        </div>
        <Contact />
      </main>
      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="label">© 2026 Pragya Rajput · Made in New Delhi</p>
          <a href="#top" className="label w-fit transition-colors hover:text-fg">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
