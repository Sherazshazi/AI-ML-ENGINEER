import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, TrendingUp, Eye, MessageSquare, BarChart3, Brain, Target } from "lucide-react";

const projects = [
  {
    title: "Advanced Medical Image Classifier",
    description: "Deep convolutional neural network for automated disease detection in medical imaging. Implemented transfer learning with ResNet-50 and deployed using FastAPI with Docker containerization. Achieved state-of-the-art accuracy on multiple medical imaging datasets.",
    techStack: ["PyTorch", "OpenCV", "FastAPI", "Docker", "AWS EC2", "PostgreSQL"],
    results: "94.2% Accuracy • 15k+ Images Processed • Clinical Trial Ready",
    icon: Eye,
    color: "ai-accent",
    github: "https://github.com/sheraz-ahmad/medical-image-classifier",
    demo: "https://medical-classifier-demo.com"
  },
  {
    title: "Real-time Object Detection System",
    description: "YOLOv8-based real-time object detection system optimized for edge deployment. Features custom dataset training, model quantization for mobile devices, and real-time streaming capabilities with 60+ FPS performance.",
    techStack: ["YOLOv8", "TensorRT", "OpenCV", "Python", "CUDA", "Flask"],
    results: "65+ FPS • 20 Object Classes • Edge Optimized • Mobile Ready",
    icon: TrendingUp,
    color: "primary",
    github: "https://github.com/sheraz-ahmad/realtime-detection",
    demo: "https://detection-demo.com"
  },
  {
    title: "Multilingual Sentiment Analysis Engine",
    description: "Advanced NLP pipeline using fine-tuned BERT and RoBERTa models for multilingual sentiment analysis. Supports 15+ languages with real-time processing capabilities and enterprise-grade scalability.",
    techStack: ["BERT", "Transformers", "FastAPI", "Redis", "PostgreSQL", "Docker"],
    results: "93.5% F1-Score • 100k+ Daily Analyses • 15 Languages",
    icon: MessageSquare,
    color: "ml-accent",
    github: "https://github.com/sheraz-ahmad/sentiment-engine",
    demo: "https://sentiment-demo.com"
  },
  {
    title: "AI-Powered Stock Prediction Platform",
    description: "Comprehensive time series forecasting platform using LSTM networks and ensemble methods. Incorporates technical indicators, sentiment analysis, and market news for enhanced prediction accuracy.",
    techStack: ["TensorFlow", "Pandas", "NumPy", "Plotly", "Alpha Vantage API", "Streamlit"],
    results: "87% Directional Accuracy • Live Trading Integration • Risk Management",
    icon: BarChart3,
    color: "ai-accent",
    github: "https://github.com/sheraz-ahmad/stock-prediction",
    demo: "https://stock-pred-demo.com"
  },
  {
    title: "Intelligent Chatbot Framework",
    description: "Production-ready conversational AI system built with transformer architecture. Features context awareness, multi-turn conversations, and domain-specific knowledge integration with RAG architecture.",
    techStack: ["GPT", "LangChain", "Pinecone", "FastAPI", "React", "PostgreSQL"],
    results: "95% User Satisfaction • 1M+ Conversations • Enterprise Ready",
    icon: Brain,
    color: "primary",
    github: "https://github.com/sheraz-ahmad/chatbot-framework",
    demo: "https://chatbot-demo.com"
  },
  {
    title: "Computer Vision Pipeline for Manufacturing",
    description: "End-to-end computer vision solution for quality control in manufacturing. Implements defect detection, classification, and automated reporting with MLOps pipeline for continuous model improvement.",
    techStack: ["OpenCV", "TensorFlow", "MLflow", "Kubernetes", "Grafana", "Prometheus"],
    results: "99.1% Defect Detection • 40% Cost Reduction • Zero Downtime",
    icon: Target,
    color: "ml-accent",
    github: "https://github.com/sheraz-ahmad/manufacturing-cv",
    demo: "https://manufacturing-demo.com"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Featured Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of end-to-end AI/ML solutions solving real-world problems
            with measurable impact and production-ready implementations.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="opacity-0 group-hover:opacity-100 transition-smooth"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="opacity-0 group-hover:opacity-100 transition-smooth"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
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
        
        {/* Call to Action */}
        <div className="text-center">
          <Card className="gradient-card border-0 shadow-medium max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h3 className="heading-md mb-4">Interested in Collaboration?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on new AI/ML projects that push the boundaries 
                of what's possible. Let's build something amazing together!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="shadow-soft" asChild>
                  <a href="https://github.com/sheraz-ahmad" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View All Projects
                  </a>
                </Button>
                <Button variant="outline" className="shadow-soft" asChild>
                  <a href="mailto:sherazahmad1891@gmail.com">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Discuss Project
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;