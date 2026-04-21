import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Main page — composes all sections in reading order.
// Anchor IDs on each section match the nav href targets.
export default function Home() {
  return (
    <>
      {/* Sticky navigation */}
      <Nav />

      <main className="relative">
        {/* Full-height hero */}
        <Hero />

        {/* Narrow content sections */}
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <section id="about">
            <About />
          </section>

          <section id="experience">
            <Experience />
          </section>
        </div>

        {/* Wider projects section */}
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <section id="projects">
            <Projects />
          </section>
        </div>

        {/* Narrow contact section */}
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
