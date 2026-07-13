import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollReveal from "./components/scrollReveal";

export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen selection:bg-zinc-100 selection:text-zinc-950 antialiased">
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        {/* <Blog /> */}
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}