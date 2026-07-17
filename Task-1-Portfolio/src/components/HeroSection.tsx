import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/mohit-profile.png";
const FloatingShape = ({
  className,
  delay = 0
}: {
  className: string;
  delay?: number;
}) => <motion.div className={`absolute rounded-full opacity-20 blur-3xl ${className}`} animate={{
  y: [0, -30, 0],
  rotate: [0, 10, 0],
  scale: [1, 1.1, 1]
}} transition={{
  duration: 8,
  repeat: Infinity,
  ease: "easeInOut",
  delay
}} />;
const HeroSection = () => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    background: "var(--gradient-hero)"
  }}>
      {/* Floating background shapes */}
      <FloatingShape className="w-96 h-96 bg-primary -top-20 -left-20" delay={0} />
      <FloatingShape className="w-80 h-80 bg-accent top-1/3 -right-20" delay={2} />
      <FloatingShape className="w-64 h-64 bg-primary bottom-20 left-1/4" delay={4} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }} className="text-center md:text-left flex-1">

            {/* Name */}
            <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.3,
              duration: 0.8
            }} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Mohit Sharma</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5,
              duration: 0.8
            }} className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Engineer · CS Student · Problem Solver
            </motion.p>

            {/* Description */}
            <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6,
              duration: 0.8
            }} className="text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Passionate about building scalable applications and solving complex problems 
              with clean, efficient code. 500+ DSA problems solved.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.7,
              duration: 0.8
            }} className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-8">
              <a href="#projects" className="btn-glow px-8 py-4 rounded-xl font-semibold text-primary-foreground transition-all">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-4 rounded-xl font-semibold glass-card hover:bg-secondary/50 transition-all">
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.9,
              duration: 0.8
            }} className="flex items-center justify-center md:justify-start gap-6">
              <a href="https://github.com/Mohitsharma10000" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card hover:bg-secondary/50 transition-all group" aria-label="GitHub">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/mohit-sharma-156073329" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card hover:bg-secondary/50 transition-all group" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="mailto:mohitsharma14651@gmail.com" className="p-3 rounded-xl glass-card hover:bg-secondary/50 transition-all group" aria-label="Email">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card p-1" style={{ boxShadow: "var(--glow-primary)" }}>
                <img
                  src={profileImage}
                  alt="Mohit Sharma"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full opacity-50" style={{ 
                background: "var(--gradient-primary)", 
                filter: "blur(25px)",
                zIndex: -1 
              }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.2,
          duration: 0.8
        }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.a href="#about" animate={{
            y: [0, 8, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;