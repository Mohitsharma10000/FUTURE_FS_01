import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, Eye, FileText, CheckCircle2 } from "lucide-react";
import {
  RESUME_DOWNLOAD_URL,
  RESUME_VIEW_URL,
} from "@/config/resume";

const resumeHighlights = [
  "B.Tech in Computer Science and Engineering — KIET Group of Institutions",
  "500+ DSA problems solved across coding platforms",
  "Proficient in C++, Java, Python & modern web technologies",
  "Hands-on project experience with React and full-stack development",
];

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPreview, setShowPreview] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Trigger the actual file download from Google Drive
    const link = document.createElement("a");
    link.href = RESUME_DOWNLOAD_URL;
    link.setAttribute("download", "Mohit_Sharma_Resume.pdf");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setIsDownloading(false), 1500);
  };

  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div ref={ref} className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-primary font-mono text-sm uppercase tracking-widest"
            >
              Resume
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            >
              My <span className="text-gradient">Resume</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg"
            >
              Get a quick snapshot below, or download the full PDF for all the details.
            </motion.p>
          </div>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Mohit Sharma — Resume</h3>
                    <p className="text-sm text-muted-foreground">PDF · Updated resume</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {resumeHighlights.map((point, index) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-3 w-full md:w-56">
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-glow flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-primary-foreground transition-all disabled:opacity-70"
                  disabled={isDownloading}
                >
                  <Download className="w-5 h-5" />
                  {isDownloading ? "Starting Download..." : "Download Resume"}
                </motion.button>

                <motion.button
                  onClick={() => setShowPreview((prev) => !prev)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold glass-card hover:bg-secondary/50 transition-all"
                >
                  <Eye className="w-5 h-5" />
                  {showPreview ? "Hide Preview" : "Preview Resume"}
                </motion.button>
              </div>
            </div>

            {/* Inline preview */}
            {showPreview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="mt-8 rounded-xl overflow-hidden border border-border"
              >
                <iframe
                  src={RESUME_VIEW_URL}
                  title="Resume Preview"
                  className="w-full h-[70vh]"
                  allow="autoplay"
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
