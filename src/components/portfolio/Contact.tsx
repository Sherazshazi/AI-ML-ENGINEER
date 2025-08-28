import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, MapPin, FileText, MessageSquare, Users, Calendar } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "john.doe@mlexpert.com",
    href: "mailto:john.doe@mlexpert.com",
    color: "primary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/johndoe-ml",
    href: "https://linkedin.com/in/johndoe-ml",
    color: "ai-accent"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/johndoe-ml",
    href: "https://github.com/johndoe-ml",
    color: "ml-accent"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null,
    color: "primary"
  }
];

const collaborationTypes = [
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Join your AI/ML team as a senior engineer or technical lead"
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description: "ML strategy, architecture design, and technical advisory"
  },
  {
    icon: Calendar,
    title: "Speaking",
    description: "Conference talks, workshops, and technical presentations"
  }
];

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Let's Build Something Amazing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on cutting-edge AI/ML projects? Let's discuss how
            we can leverage data science to drive innovation and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-md mb-6">Get In Touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card key={index} className="gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
                      <CardContent className="pt-6">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-${method.color}/10`}>
                            <IconComponent className={`w-5 h-5 text-${method.color}`} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-muted-foreground">{method.label}</p>
                            {method.href ? (
                              <a 
                                href={method.href}
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
              <h3 className="heading-sm mb-6">Open to Collaboration</h3>
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

            <div className="flex flex-wrap gap-3">
              <Button variant="default" size="lg" className="shadow-soft">
                <FileText className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="shadow-soft">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Call
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="gradient-card border-0 shadow-medium">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Send a Message</CardTitle>
              <p className="text-muted-foreground">
                Have a project in mind? Let's discuss how we can work together.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" className="transition-smooth" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" className="transition-smooth" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@company.com" className="transition-smooth" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Company (Optional)</label>
                <Input placeholder="Your Company" className="transition-smooth" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Project Type</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Machine Learning", "Data Science", "MLOps", "Consulting", "Other"].map((type) => (
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
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, timeline, and how I can help..."
                  className="min-h-[120px] transition-smooth"
                />
              </div>
              
              <Button className="w-full shadow-soft">
                <MessageSquare className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;