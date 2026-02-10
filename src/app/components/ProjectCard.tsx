import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: "Full-Stack" | "Backend" | "Frontend" | "Mobile";
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card rounded-2xl overflow-hidden group hover:glow-effect transition-all duration-500 ${project.featured ? 'md:col-span-2' : ''
        }`}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <ExternalLink className="w-6 h-6 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-3">
              {project.type}
            </span>
            <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
