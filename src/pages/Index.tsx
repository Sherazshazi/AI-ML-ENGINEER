import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-primary/5 border-t py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JD</span>
              </div>
              <span className="text-foreground font-medium">
                John Doe - AI/ML Engineer
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 John Doe. Building the future with AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
