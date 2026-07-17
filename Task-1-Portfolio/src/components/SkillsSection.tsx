import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Globe, 
  Database, 
  Wrench,
  Cpu
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C++", "Java", "Python"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Core CS Concepts",
    icon: Cpu,
    skills: ["Data Structures", "Algorithms", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code"],
    color: "from-yellow-500 to-orange-500",
  },
];

const SkillCard = ({ category, index, isInView }: { category: typeof skillCategories[0]; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        rotateX: -5,
      }}
      className="glass-card rounded-2xl p-6 group relative overflow-hidden"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {/* Gradient accent on hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} 
      />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} p-2 flex items-center justify-center`}>
            <category.icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-semibold text-foreground">{category.title}</h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 + skillIndex * 0.05, duration: 0.3 }}
              className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-secondary/20">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-primary font-mono text-sm uppercase tracking-widest"
            >
              Technical Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            >
              My <span className="text-gradient">Tech Stack</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              Technologies and tools I use to bring ideas to life
            </motion.p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard 
                key={category.title} 
                category={category} 
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

export default SkillsSection;
