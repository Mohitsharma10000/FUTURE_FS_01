import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Code2, Award, Users } from "lucide-react";

const achievements = [
  {
    icon: Code2,
    title: "500+ DSA Problems",
    description: "Solved over 500 Data Structures and Algorithms problems on LeetCode and HackerRank, demonstrating strong problem-solving abilities.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Hackathon Participant",
    description: "Participated in multiple college-level hackathons, focusing on building scalable and innovative solutions under time constraints.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Certified Developer",
    description: "Earned industry certifications in C++ Programming and Web Development, validating technical expertise and commitment to learning.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Trophy,
    title: "Academic Excellence",
    description: "Maintaining a strong GPA of 8.27/10 while actively pursuing practical projects and competitive programming.",
    gradient: "from-green-500 to-emerald-500",
  },
];

const AchievementCard = ({ achievement, index, isInView }: { achievement: typeof achievements[0]; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.03,
        rotateY: 5,
        rotateX: -3,
      }}
      className="glass-card rounded-2xl p-6 group relative overflow-hidden"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {/* Gradient border top */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.gradient}`} />

      {/* Hover glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.gradient} p-3 flex items-center justify-center mb-5`}>
          <achievement.icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {achievement.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

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
              Achievements
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            >
              Milestones & <span className="text-gradient">Recognition</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              Key accomplishments that reflect my dedication to continuous growth
            </motion.p>
          </div>

          {/* Achievements grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
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

export default AchievementsSection;
