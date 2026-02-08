import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Engagements from "@/components/Engagements";
import Footer from "@/components/Footer";

/**
 * The main landing page of the portfolio.
 * Renders all major sections: Hero, About, Experience, Skills, and Engagements.
 *
 * @returns {JSX.Element} The complete home page.
 *
 * @author Tristan Mahinay
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Engagements />
      </main>
      <Footer />
    </>
  );
}
