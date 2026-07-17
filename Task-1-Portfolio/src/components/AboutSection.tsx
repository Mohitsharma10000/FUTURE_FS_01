import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket, Target } from "lucide-react";
const highlights = [{
  icon: Code2,
  title: "Clean Code",
  description: "Writing maintainable, scalable solutions"
}, {
  icon: Target,
  title: "Problem Solver",
  description: "500+ DSA challenges conquered"
}, {
  icon: Lightbulb,
  title: "Quick Learner",
  description: "Adapting to new technologies fast"
}, {
  icon: Rocket,
  title: "Goal-Oriented",
  description: "Focused on impactful results"
}];
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span initial={{
            opacity: 0
          }} animate={isInView ? {
            opacity: 1
          } : {}} transition={{
            delay: 0.2
          }} className="text-primary font-mono text-sm uppercase tracking-widest">
              About Me
            </motion.span>
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            delay: 0.3,
            duration: 0.6
          }} className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Crafting Digital{" "}
              <span className="text-gradient">Experiences</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            delay: 0.4,
            duration: 0.8
          }} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Computer Science Engineering</span> student 
                at KIET Group of Institutions with a strong foundation in Data Structures, Algorithms, 
                and Object-Oriented Programming.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in software development is driven by a passion for 
                <span className="text-foreground font-medium"> solving complex problems</span> and 
                building <span className="text-foreground font-medium">efficient, user-focused applications</span>. 
                I thrive on optimizing performance and writing clean, maintainable code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently seeking opportunities to contribute to impactful projects 
                as a Software Developer Intern, where I can apply my skills in 
                <span className="text-primary font-medium"> C++, Java, Python</span>, and modern web technologies.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gradient">500+</div>
                  <div className="text-sm text-muted-foreground">Problems Solved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">8.09</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">3+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
              </div>
            </motion.div>

            {/* Highlight cards */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            delay: 0.5,
            duration: 0.8
          }} className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => <motion.div key={item.title} initial={{
              opacity: 0,
              y: 20
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              delay: 0.6 + index * 0.1,
              duration: 0.5
            }} whileHover={{
              scale: 1.05,
              rotateY: 5,
              rotateX: 5
            }} className="glass-card p-6 rounded-2xl group cursor-default" style={{
              transformStyle: 'preserve-3d'
            }}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>)}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;