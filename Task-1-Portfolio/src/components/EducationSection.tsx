import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
const coursework = ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Database Management Systems", "Computer Networks"];
const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="education" className="section-padding relative overflow-hidden bg-secondary/20">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div ref={ref} className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span initial={{
            opacity: 0
          }} animate={isInView ? {
            opacity: 1
          } : {}} transition={{
            delay: 0.1
          }} className="text-primary font-mono text-sm uppercase tracking-widest">
              Education
            </motion.span>
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Academic <span className="text-gradient">Background</span>
            </motion.h2>
          </div>

          {/* Education card */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          delay: 0.3,
          duration: 0.7
        }} whileHover={{
          scale: 1.02
        }} className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

            <div className="flex flex-col md:flex-row gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  B.Tech in Computer Science and Engineering
                </h3>
                <p className="text-lg text-primary font-medium mb-4">
                  KIET Group of Institutions, AKTU
                </p>

                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Expected Graduation: 2028</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Ghaziabad, UP, India</span>
                  </div>
                </div>

                {/* GPA Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/10 mb-8">
                  <span className="text-sm text-muted-foreground">Current GPA</span>
                  <span className="text-2xl font-bold text-gradient">8.09 / 10</span>
                </div>

                {/* Coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Relevant Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course, index) => <motion.span key={course} initial={{
                    opacity: 0,
                    scale: 0.8
                  }} animate={isInView ? {
                    opacity: 1,
                    scale: 1
                  } : {}} transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.3
                  }} className="px-4 py-2 text-sm rounded-lg bg-secondary text-foreground/80 hover:bg-secondary/80 transition-colors">
                        {course}
                      </motion.span>)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default EducationSection;