import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, Cloud, GitBranch, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: Brain,
    color: "ai-accent",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning", 
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "Natural Language Processing",
      "Reinforcement Learning",
      "Transfer Learning"
    ]
  },
  {
    title: "Deep Learning Frameworks",
    icon: Code,
    color: "primary",
    skills: [
      "TensorFlow",
      "PyTorch", 
      "Keras",
      "Scikit-learn",
      "Hugging Face Transformers",
      "OpenCV",
      "YOLO",
      "BERT/GPT"
    ]
  },
  {
    title: "Data Science & Analytics",
    icon: Database,
    color: "ml-accent",
    skills: [
      "Python",
      "R",
      "SQL", 
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Apache Spark"
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    color: "ai-accent",
    skills: [
      "AWS (SageMaker, EC2, S3)",
      "Google Cloud Platform",
      "Azure ML",
      "Docker",
      "Kubernetes",
      "Terraform"
    ]
  },
  {
    title: "MLOps & Deployment",
    icon: GitBranch,
    color: "primary",
    skills: [
      "MLflow",
      "Model Versioning",
      "CI/CD Pipelines",
      "Model Monitoring",
      "A/B Testing",
      "Feature Stores",
      "Model Optimization",
      "Production Deployment"
    ]
  },
  {
    title: "Development Tools",
    icon: Zap,
    color: "ml-accent",
    skills: [
      "Git & GitHub",
      "Jupyter Notebooks",
      "VS Code",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "Redis"
    ]
  }
];

const certifications = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2024",
    color: "primary"
  },
  {
    name: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    year: "2023",
    color: "ai-accent"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2023",
    color: "ml-accent"
  },
  {
    name: "Machine Learning Engineering for Production",
    issuer: "DeepLearning.AI", 
    year: "2022",
    color: "primary"
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Technical Skills</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building and deploying intelligent systems
            at scale, from research to production.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-xl bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-smooth`}>
                      <IconComponent className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <CardTitle className="text-lg font-medium">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
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

        {/* Certifications Section */}
        <div>
          <h2 className="heading-lg mb-8 text-center">Certifications & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{cert.name}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                      <div className={`w-3 h-3 rounded-full bg-${cert.color}`}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <Card className="gradient-card border-0 shadow-medium max-w-4xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h3 className="heading-md mb-4">Continuous Learning Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The field of AI/ML evolves rapidly, and I'm committed to staying at the cutting edge. 
                I regularly engage with the latest research, experiment with new frameworks, and 
                contribute to open-source projects to ensure my skills remain current and impactful.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;