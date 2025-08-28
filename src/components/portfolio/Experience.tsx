import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, Award, BookOpen } from "lucide-react";

const experiences = [
  {
    title: "Senior ML Engineer",
    company: "TechVision AI",
    period: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead development of computer vision models for autonomous systems. Architected MLOps pipeline reducing model deployment time by 60%. Mentored junior engineers and drove best practices for ML lifecycle management.",
    achievements: [
      "Deployed 5+ production ML models serving 1M+ daily requests",
      "Reduced model training time by 40% through optimization",
      "Led cross-functional team of 8 engineers"
    ],
    technologies: ["PyTorch", "Kubernetes", "AWS", "MLflow", "Docker"]
  },
  {
    title: "ML Research Engineer",
    company: "DataCorp Labs",
    period: "2020 - 2022",
    location: "Boston, MA", 
    type: "Full-time",
    description: "Researched novel deep learning architectures for NLP applications. Published 3 peer-reviewed papers and contributed to open-source ML frameworks. Collaborated with academic institutions on cutting-edge research.",
    achievements: [
      "Published 3 papers in top-tier ML conferences",
      "Developed novel attention mechanism improving BERT by 8%",
      "Open-sourced 2 popular ML libraries (500+ GitHub stars)"
    ],
    technologies: ["TensorFlow", "Transformers", "Python", "JAX", "CUDA"]
  },
  {
    title: "Data Science Intern",
    company: "FinTech Innovations",
    period: "Summer 2019",
    location: "New York, NY",
    type: "Internship", 
    description: "Built predictive models for algorithmic trading strategies. Implemented real-time data processing pipeline handling 100k+ transactions per second. Presented findings to C-level executives.",
    achievements: [
      "Developed trading algorithm with 15% annual return",
      "Processed 10TB+ of financial data daily",
      "Received return offer and outstanding intern award"
    ],
    technologies: ["Python", "Apache Kafka", "PostgreSQL", "scikit-learn"]
  }
];

const education = [
  {
    degree: "M.S. Computer Science",
    school: "Stanford University",
    period: "2018 - 2020",
    specialization: "Artificial Intelligence",
    gpa: "3.9/4.0",
    thesis: "Deep Reinforcement Learning for Multi-Agent Systems"
  },
  {
    degree: "B.S. Computer Engineering", 
    school: "UC Berkeley",
    period: "2014 - 2018",
    specialization: "Machine Learning Track",
    gpa: "3.8/4.0",
    honors: "Magna Cum Laude"
  }
];

const certifications = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2023"
  },
  {
    name: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services", 
    year: "2022"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2021"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Professional Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey through impactful roles in AI/ML engineering, from research
              to production-scale deployments.
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="gradient-card border-0 shadow-medium">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2 md:mb-0">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Building className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                        <p className="text-lg font-medium text-primary">{exp.company}</p>
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

        {/* Education & Certifications Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 rounded-xl bg-ai-accent/10">
                <BookOpen className="w-6 h-6 text-ai-accent" />
              </div>
              <h3 className="heading-md">Education</h3>
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
              <h3 className="heading-md">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="gradient-card border-0 shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      </div>
                      <Badge variant="outline">{cert.year}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;