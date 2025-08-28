import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, FileText, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 gradient-hero text-white relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-50" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <div className="mb-8 flex justify-center">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/10 text-white border-white/20 backdrop-blur-sm">
            <Brain className="w-4 h-4 mr-2" />
            AI/ML Engineer
          </Badge>
        </div>
        
        <h1 className="heading-xl mb-6 text-white">
          Sheraz Ahmad
          <br />
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            AI/ML Engineer
          </span>
        </h1>
        
        <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Building intelligent systems with Machine Learning & AI. Passionate about leveraging 
          cutting-edge technology to solve real-world problems and drive innovation through 
          data-driven solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link to="/projects">
            <Button variant="hero" size="lg" className="shadow-lg group">
              View Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-lg">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-lg">
            <FileText className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/sheraz-ahmad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-smooth"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/sheraz-ahmad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-smooth"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:sherazahmad1891@gmail.com"
            className="text-white/80 hover:text-white transition-smooth"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link to="/about" className="block">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;