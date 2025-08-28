import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, Award, BookOpen, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior ML Engineer",
    company: "TechVision AI",
    period: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead the development of computer vision models for autonomous systems and medical imaging applications. Architect MLOps pipelines that reduced model deployment time by 60% and mentor a team of junior engineers in ML best practices.",
    achievements: [
      "Deployed 8+ production ML models serving 2M+ daily requests",
      "Reduced model training time by 45% through distributed computing optimization",
      "Led cross-functional team of 12 engineers across 3 different projects",
      "Published 2 research papers in top-tier ML conferences"
    ],
    technologies: ["PyTorch", "Kubernetes", "AWS", "MLflow", "Docker", "TensorFlow"]
  },
  {
    title: "ML Research Engineer",
    company: "DataCorp Labs",
    period: "2020 - 2022",
    location: "Boston, MA", 
    type: "Full-time",
    description: "Researched novel deep learning architectures for NLP applications with focus on transformer models and language understanding. Collaborated with academic institutions and contributed to open-source ML frameworks.",
    achievements: [
      "Published 4 papers in ACL, ICML, and NeurIPS conferences",
      "Developed novel attention mechanism improving BERT performance by 12%",
      "Open-sourced 3 popular ML libraries with 2000+ GitHub stars combined",
      "Secured $500K research grant for multi-modal AI research"
    ],
    technologies: ["TensorFlow", "Transformers", "Python", "JAX", "CUDA", "PyTorch"]
  },
  {
    title: "AI Engineer",
    company: "InnovateML Solutions",
    period: "2018 - 2020",
    location: "Seattle, WA",
    type: "Full-time",
    description: "Built end-to-end machine learning solutions for e-commerce and fintech clients. Specialized in recommendation systems, fraud detection, and customer behavior analysis with focus on scalable production deployments.",
    achievements: [
      "Developed recommendation system increasing client revenue by 25%",
      "Built fraud detection model with 99.2% accuracy and <0.1% false positive rate",
      "Implemented real-time ML pipeline processing 500K+ events per second",
      "Led technical workshops for 50+ engineers on ML best practices"
    ],
    technologies: ["Python", "Apache Kafka", "Redis", "PostgreSQL", "scikit-learn", "Docker"]
  },
  {
    title: "Data Science Intern",
    company: "FinTech Innovations",
    period: "Summer 2017",
    location: "New York, NY",
    type: "Internship", 
    description: "Developed predictive models for algorithmic trading strategies and risk assessment. Implemented real-time data processing pipeline handling high-frequency trading data and presented findings to C-level executives.",
    achievements: [
      "Developed trading algorithm achieving 18% annual return",
      "Processed 15TB+ of financial data daily with 99.9% uptime",
      "Received return offer and outstanding intern award",
      "Presented research findings to board of directors"
    ],
    technologies: ["Python", "Apache Kafka", "PostgreSQL", "scikit-learn", "Pandas", "NumPy"]
  }
];

const education = [
  {
    degree: "M.S. Computer Science",
    school: "Stanford University",
    period: "2016 - 2018",
    specialization: "Artificial Intelligence",
    gpa: "3.9/4.0",
    thesis: "Deep Reinforcement Learning for Multi-Agent Systems",
    achievements: ["Dean's List", "Graduate Research Assistant", "TA for CS229 Machine Learning"]
  },
  {
    degree: "B.S. Computer Engineering", 
    school: "UC Berkeley",
    period: "2012 - 2016",
    specialization: "Machine Learning Track",
    gpa: "3.8/4.0",
    honors: "Magna Cum Laude",
    achievements: ["IEEE Honor Society", "Undergraduate Research Scholar", "President of AI Club"]
  }
];

const certifications = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2024",
    link: "https://www.credential.net/tensorflow-cert"
  },
  {
    name: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services", 
    year: "2023",
    link: "https://aws.amazon.com/certification/"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2022",
    link: "https://www.coursera.org/specializations/deep-learning"
  },
  {
    name: "Machine Learning Engineering for Production",
    issuer: "DeepLearning.AI",
    year: "2022",
    link: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops"
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">Professional Experience</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through impactful roles in AI/ML engineering, from research
            to production-scale deployments and team leadership.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2 md:mb-0">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Building className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                        <p className="text-lg font-medium text-primary">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 rounded-xl bg-ai-accent/10">
                <BookOpen className="w-6 h-6 text-ai-accent" />
              </div>
              <h2 className="heading-lg">Education</h2>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="gradient-card border-0 shadow-soft">
                  <CardContent className="pt-6">
                    <div className="mb-3">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="font-medium">Period:</span> {edu.period}</p>
                      <p><span className="font-medium">Specialization:</span> {edu.specialization}</p>
                      <p><span className="font-medium">GPA:</span> {edu.gpa}</p>
                      {edu.thesis && <p><span className="font-medium">Thesis:</span> {edu.thesis}</p>}
                      {edu.honors && <p><span className="font-medium">Honors:</span> {edu.honors}</p>}
                      {edu.achievements && (
                        <div>
                          <span className="font-medium">Achievements:</span>
                          <ul className="list-disc list-inside ml-4 mt-1">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 rounded-xl bg-ml-accent/10">
                <Award className="w-6 h-6 text-ml-accent" />
              </div>
              <h2 className="heading-lg">Certifications</h2>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth group">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{cert.year}</Badge>
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;