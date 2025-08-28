import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, MapPin, FileText, MessageSquare, Users, Calendar, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "sherazahmad1891@gmail.com",
    href: "mailto:sherazahmad1891@gmail.com",
    color: "primary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/sheraz-ahmad",
    href: "https://linkedin.com/in/sheraz-ahmad",
    color: "ai-accent"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/sheraz-ahmad",
    href: "https://github.com/sheraz-ahmad",
    color: "ml-accent"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide",
    href: null,
    color: "primary"
  }
];

const collaborationTypes = [
  {
    icon: Users,
    title: "Full-time Opportunities",
    description: "Senior ML Engineer or AI Research positions with innovative teams"
  },
  {
    icon: MessageSquare,
    title: "Consulting & Freelance",
    description: "ML strategy, model development, and technical advisory services"
  },
  {
    icon: Calendar,
    title: "Speaking & Workshops",
    description: "Conference talks, technical workshops, and training sessions"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Let's Build Something Amazing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on cutting-edge AI/ML projects? Let's discuss how
            we can leverage data science to drive innovation and create meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-lg mb-6">Get In Touch</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card key={index} className="gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth group">
                      <CardContent className="pt-6">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-${method.color}/10 group-hover:bg-${method.color}/20 transition-smooth`}>
                            <IconComponent className={`w-5 h-5 text-${method.color}`} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-muted-foreground">{method.label}</p>
                            {method.href ? (
                              <a 
                                href={method.href}
                                target={method.href.startsWith('http') ? '_blank' : undefined}
                                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className={`text-sm font-medium text-${method.color} hover:underline transition-smooth`}
                              >
                                {method.value}
                              </a>
                            ) : (
                              <p className="text-sm font-medium">{method.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="heading-md mb-6">Open to Collaboration</h3>
              <div className="space-y-4">
                {collaborationTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-card border shadow-soft">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{type.title}</h4>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="heading-sm mb-4">Quick Actions</h3>
              <div className="flex flex-wrap gap-3">
                <Button className="shadow-soft">
                  <FileText className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline" className="shadow-soft">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Call
                </Button>
                <Button variant="outline" className="shadow-soft" asChild>
                  <a href="https://github.com/sheraz-ahmad" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="gradient-card border-0 shadow-medium">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Send a Message</CardTitle>
              <p className="text-muted-foreground">
                Have an AI/ML project in mind? Let's discuss how we can work together to bring your vision to life.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name *</label>
                  <Input placeholder="John" className="transition-smooth" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name *</label>
                  <Input placeholder="Doe" className="transition-smooth" required />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email *</label>
                <Input type="email" placeholder="john@company.com" className="transition-smooth" required />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Company (Optional)</label>
                <Input placeholder="Your Company or Organization" className="transition-smooth" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Project Type</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Machine Learning", "Computer Vision", "NLP", "MLOps", "Consulting", "Research", "Other"].map((type) => (
                    <Badge 
                      key={type} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Budget Range (Optional)</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["< $10k", "$10k - $50k", "$50k - $100k", "$100k+", "Equity/Partnership"].map((budget) => (
                    <Badge 
                      key={budget} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground transition-smooth text-xs"
                    >
                      {budget}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message *</label>
                <Textarea 
                  placeholder="Tell me about your project, goals, timeline, and how I can help. The more details you provide, the better I can assist you..."
                  className="min-h-[120px] transition-smooth"
                  required
                />
              </div>
              
              <Button className="w-full shadow-soft">
                <MessageSquare className="w-5 h-5 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                I typically respond within 24 hours. For urgent matters, feel free to reach out via email directly.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="gradient-card border-0 shadow-medium max-w-3xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h3 className="heading-md mb-4">Ready to Start Your AI/ML Journey?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're looking to implement your first machine learning model or scale 
                an existing AI system, I'm here to help turn your data into actionable insights.
              </p>
              <Button size="lg" className="shadow-soft" asChild>
                <a href="mailto:sherazahmad1891@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Start the Conversation
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;