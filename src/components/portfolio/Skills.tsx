import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, Cloud, GitBranch, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: Brain,
    color: "ai-accent",
    skills: [
      "Supervised & Unsupervised Learning",
      "Deep Learning (CNN, RNN, LSTM)",
      "Computer Vision",
      "Natural Language Processing",
      "Reinforcement Learning",
      "Transfer Learning"
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: Code,
    color: "primary",
    skills: [
      "TensorFlow",
      "PyTorch", 
      "Scikit-learn",
      "Keras",
      "Hugging Face",
      "OpenCV"
    ]
  },
  {
    title: "Data & Analytics",
    icon: Database,
    color: "ml-accent",
    skills: [
      "Python",
      "R",
      "SQL",
      "Pandas",
      "NumPy",
      "Apache Spark"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "ai-accent",
    skills: [
      "AWS (SageMaker, EC2, S3)",
      "Google Cloud Platform",
      "Azure ML",
      "Docker",
      "Kubernetes",
      "MLflow"
    ]
  },
  {
    title: "MLOps & Deployment",
    icon: GitBranch,
    color: "primary",
    skills: [
      "Model Versioning",
      "CI/CD Pipelines",
      "Model Monitoring",
      "A/B Testing",
      "Feature Stores",
      "Model Optimization"
    ]
  },
  {
    title: "Specialized Tools",
    icon: Zap,
    color: "ml-accent",
    skills: [
      "Jupyter",
      "Git",
      "CUDA",
      "Tableau",
      "Airflow",
      "FastAPI"
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building and deploying intelligent systems
            at scale, from research to production.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-xl bg-${category.color}/10`}>
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
      </div>
    </section>
  );
};

export default Skills;