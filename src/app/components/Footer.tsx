import { motion } from "motion/react";
import { Heart, Code2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-6 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Copyright with Heart */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>by Sainatha Reddy</span>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-gray-500">
            Designed & Built with React, TypeScript, and Tailwind CSS
          </p>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Back to Top ↑
            </a>
            <a
              href="mailto:sainathreddy057@gmail.com"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
