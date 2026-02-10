import { motion } from "motion/react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20">
      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Sainatha Reddy
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Full Stack Web Developer specializing in MERN stack, creating dynamic and functional websites that enhance user experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-4 justify-center items-center mb-12"
        >
          <a
            href="https://github.com/sainatha-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-3 rounded-xl hover:scale-110 transition-transform duration-300"
          >
            <Github className="w-6 h-6 text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/sainatha-reddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-3 rounded-xl hover:scale-110 transition-transform duration-300"
          >
            <Linkedin className="w-6 h-6 text-gray-300" />
          </a>
          <a
            href="mailto:sainathreddy057@gmail.com"
            className="glass-card p-3 rounded-xl hover:scale-110 transition-transform duration-300"
          >
            <Mail className="w-6 h-6 text-gray-300" />
          </a>
        </motion.div>


        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            href="/Resume.pdf"
            download
            className="glass-card px-8 py-4 rounded-full hover:glow-effect transition-all duration-300 group"
          >
            <span className="flex items-center gap-2 text-gray-200">
              Download Resume
              <ChevronDown className="w-5 h-5 rotate-180 group-hover:-translate-y-1 transition-transform" />
            </span>
          </motion.a>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            onClick={scrollToProjects}
            className="glass-card px-8 py-4 rounded-full hover:glow-effect transition-all duration-300 group"
          >
            <span className="flex items-center gap-2 text-gray-200">
              View My Work
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
