import { motion } from "motion/react";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20 relative">
      {/* Background gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate about building scalable web solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Hello! I'm Sainatha Reddy</h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm a Full Stack Developer with a strong foundation in HTML, CSS, JavaScript,
                Bootstrap, SQL, MongoDB, Node.js, Express.js, React.js, and Figma. I'm passionate
                about using these skills to develop innovative web applications that are user-friendly.
              </p>
              <p>
                I specialize in both front-end and back-end technologies, bringing ideas to life
                through code. My approach combines clean code principles with modern design patterns
                to create dynamic and functional websites that enhance user experiences.
              </p>
              <p>
                I'm always eager to learn more about web development and emerging technologies.
                I enjoy the challenge of coding and solving real-world problems, and I'm currently
                looking for opportunities to join a team that values innovation and shares my
                enthusiasm for technology.
              </p>
            </div>
          </motion.div>

          {/* Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg text-white font-medium">B.Tech in Computer Science</h4>
                  <p className="text-gray-400">IIITDM Kancheepuram</p>
                  <p className="text-sm text-gray-500">2023 - 2027</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Certifications</h3>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>• MERN Stack Development</li>
                <li>• Full-Stack Web Development</li>
                <li>• Responsive Design & UI/UX</li>
                <li>• Database Management (SQL & MongoDB)</li>
              </ul>
            </div>

            {/* Experience Highlight */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl">
                  <Briefcase className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Experience</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg text-white font-medium">Full Stack Developer</h4>
                  <p className="text-gray-400">Developer's Club IIITDM</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Built and maintained the Developer's Club website, creating platforms for students and tech enthusiasts to collaborate
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">What I Bring to the Table</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">2+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
              <p className="text-gray-400">Technologies Mastered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
