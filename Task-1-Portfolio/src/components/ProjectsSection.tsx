import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    description: "A comprehensive database-driven system designed to efficiently manage student records with improved data retrieval performance and modular architecture.",
    techStack: ["C++", "MySQL", "OOP"],
    features: [
      "40% improvement in data retrieval efficiency",
      "Modular and scalable design",
      "SQL-based data integrity",
    ],
    github: "https://github.com/Mohitsharma10000/Student-Management-System",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive personal website showcasing projects and achievements with optimized front-end performance and reusable component architecture.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Fully responsive design",
      "Optimized performance",
      "Reusable components",
    ],
    github: "#",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Weather Forecast App",
    description: "A real-time weather application that integrates RESTful APIs to deliver dynamic, location-based weather data with an intuitive user interface.",
    techStack: ["React", "JavaScript", "OpenWeather API"],
    features: [
      "Real-time weather data",
      "Efficient state management",
      "Responsive UI design",
    ],
    github: "#",
    gradient: "from-orange-500 to-red-600",
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.7 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="glass-card rounded-2xl overflow-hidden h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Gradient header */}
        <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
        
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Folder className="w-6 h-6 text-primary" />
            </div>
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                aria-label="View project"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-5 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl`}
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div ref={ref} className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-primary font-mono text-sm uppercase tracking-widest"
            >
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            >
              Projects I've <span className="text-gradient">Built</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              A selection of projects that showcase my problem-solving abilities and technical skills
            </motion.p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
