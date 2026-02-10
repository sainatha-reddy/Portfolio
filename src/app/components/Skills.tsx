import { motion } from "motion/react";
import { 
  Code2, 
  Database, 
  Server, 
  Smartphone, 
  GitBranch, 
  Cloud,
  Box,
  Palette
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Redux/Context API", "Next.js"]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "WebSockets", "Microservices", "JWT & OAuth"]
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose", "Prisma", "Database Design"]
  },
  {
    title: "Mobile & Responsive",
    icon: Smartphone,
    skills: ["Responsive Design", "Mobile-First Approach", "Progressive Web Apps", "Cross-Browser Compatibility"]
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    skills: ["Git & GitHub", "Docker", "CI/CD", "Jest & Testing", "Webpack & Vite", "npm/yarn", "Postman"]
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    skills: ["AWS (S3, EC2)", "Heroku", "Vercel", "Netlify", "Digital Ocean", "Firebase"]
  },
  {
    title: "APIs & Integration",
    icon: Box,
    skills: ["REST API Design", "Third-party APIs", "Payment Gateways", "Google Maps API", "Socket.io"]
  },
  {
    title: "UI/UX & Design",
    icon: Palette,
    skills: ["Figma", "Responsive Layouts", "Accessibility", "Design Systems", "Animation (Framer Motion)"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-20 relative">
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:glow-effect-subtle transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/10 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
