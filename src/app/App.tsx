import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      
      <main id="home">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}