import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Experience", href: "/experience" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Projects",
      links: [
        { name: "Medical Image Classifier", href: "/projects#medical-classifier" },
        { name: "Object Detection System", href: "/projects#object-detection" },
        { name: "Sentiment Analysis Engine", href: "/projects#sentiment-analysis" },
        { name: "Stock Prediction Platform", href: "/projects#stock-prediction" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Email", href: "mailto:sherazahmad1891@gmail.com" },
        { name: "GitHub", href: "https://github.com/sheraz-ahmad" },
        { name: "LinkedIn", href: "https://linkedin.com/in/sheraz-ahmad" },
        { name: "Download Resume", href: "/resume.pdf" }
      ]
    }
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              AI/ML Engineer passionate about building intelligent systems that solve 
              real-world problems and drive innovation.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/sheraz-ahmad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/sheraz-ahmad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:sherazahmad1891@gmail.com"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('http') || link.href.startsWith('mailto:') ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Sheraz Ahmad. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;