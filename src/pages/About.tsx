import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Code, Database, Cloud, Target, Users, Download } from "lucide-react";
import { Link } from "react-router-dom";

const coreStrengths = [
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    icon: Code,
    title: "Deep Learning",
    skills: ["Neural Networks", "CNN", "RNN", "LSTM", "Transformers", "Computer Vision"]
  },
  {
    icon: Database,
    title: "NLP & Data Science",
    skills: ["Natural Language Processing", "BERT", "GPT", "Data Mining", "Statistical Analysis"]
  },
  {
    icon: Cloud,
    title: "MLOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "MLflow", "CI/CD Pipelines"]
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate AI/ML Engineer with expertise in building scalable intelligent systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Profile Section */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="heading-lg mb-4">Professional Background</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>
                    I'm Sheraz Ahmad, an AI/ML Engineer with a passion for transforming complex data into 
                    intelligent solutions. With extensive experience in machine learning, deep learning, 
                    and MLOps, I specialize in building production-ready AI systems that solve real-world problems.
                  </p>
                  <p>
                    My journey in artificial intelligence began with a fascination for how machines can learn 
                    and adapt. Over the years, I've developed expertise in various domains including computer 
                    vision, natural language processing, and predictive analytics, always focusing on delivering 
                    measurable business impact.
                  </p>
                  <p>
                    I believe in the power of continuous learning and staying at the forefront of AI innovation. 
                    Whether it's implementing state-of-the-art research or optimizing existing models for 
                    production, I'm committed to pushing the boundaries of what's possible with AI/ML.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button className="shadow-soft">
                    <Target className="w-5 h-5 mr-2" />
                    Let's Collaborate
                  </Button>
                </Link>
                <Button variant="outline" className="shadow-soft">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Photo & Quick Stats */}
          <div className="space-y-6">
            <Card className="gradient-card border-0 shadow-medium">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-ai-accent/20 rounded-full flex items-center justify-center border-4 border-background shadow-strong">
                    <Users className="w-16 h-16 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Sheraz Ahmad</h3>
                    <p className="text-muted-foreground">AI/ML Engineer</p>
                    <Badge variant="secondary" className="mt-2">
                      Available for Projects
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-center">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ai-accent">20+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ml-accent">15+</div>
                  <p className="text-sm text-muted-foreground">Technologies Mastered</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Strengths */}
        <div className="mb-20">
          <h2 className="heading-lg mb-8 text-center">Core Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreStrengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <Card key={index} className="gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{strength.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {strength.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs font-medium hover:bg-secondary/80 transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <Card className="gradient-card border-0 shadow-medium max-w-4xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h3 className="heading-md mb-4">Mission Statement</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "To harness the power of artificial intelligence and machine learning to create 
                innovative solutions that not only solve complex technical challenges but also 
                drive meaningful impact for businesses and society at large."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;