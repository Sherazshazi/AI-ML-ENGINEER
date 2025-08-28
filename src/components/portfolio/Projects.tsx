import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, TrendingUp, Eye, MessageSquare, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "CNN-based Medical Image Classifier",
    description: "Deep learning model for automated disease detection in medical imaging with 94.2% accuracy. Implemented transfer learning with ResNet-50 and deployed using Flask API.",
    techStack: ["PyTorch", "OpenCV", "Flask", "Docker", "AWS EC2"],
    results: "94.2% Accuracy • 10k+ Images Processed",
    icon: Eye,
    color: "ai-accent"
  },
  {
    title: "Real-time Object Detection System",
    description: "YOLOv5-based real-time object detection for surveillance applications. Optimized for edge deployment with 60+ FPS performance on custom datasets.",
    techStack: ["YOLOv5", "TensorRT", "OpenCV", "Python", "CUDA"],
    results: "60+ FPS • 15 Object Classes • Edge Optimized",
    icon: TrendingUp,
    color: "primary"
  },
  {
    title: "BERT-powered Sentiment Analysis",
    description: "Advanced NLP pipeline for social media sentiment analysis using fine-tuned BERT. Handles multilingual content with real-time processing capabilities.",
    techStack: ["BERT", "Transformers", "FastAPI", "Redis", "PostgreSQL"],
    results: "92% F1-Score • 50k+ Daily Analyses",
    icon: MessageSquare,
    color: "ml-accent"
  },
  {
    title: "Stock Price Prediction with LSTMs",
    description: "Time series forecasting model using LSTM networks for financial market prediction. Incorporates technical indicators and sentiment analysis.",
    techStack: ["TensorFlow", "Pandas", "NumPy", "Plotly", "Alpha Vantage API"],
    results: "85% Directional Accuracy • Live Trading Bot",
    icon: BarChart3,
    color: "ai-accent"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of end-to-end AI/ML solutions solving real-world problems
            with measurable impact and production-ready implementations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-${project.color}/10 group-hover:bg-${project.color}/20 transition-smooth`}>
                      <IconComponent className={`w-6 h-6 text-${project.color}`} />
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold mb-3">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className={`p-3 rounded-lg bg-${project.color}/5 border border-${project.color}/20`}>
                    <p className={`text-sm font-medium text-${project.color}`}>
                      📊 {project.results}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="shadow-soft">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;