import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-gradient cursor-default"
            >
              Mohit Sharma
            </motion.span>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} · Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Mohitsharma10000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-sharma-156073329"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:mohitsharma14651@gmail.com"
              className="p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
