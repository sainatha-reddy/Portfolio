import { motion } from "motion/react";
import { ProjectCard, type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: "1",
    title: "Developer's Club Website",
    description: "A comprehensive platform where students and tech enthusiasts come together to explore, learn, and share knowledge on various technologies. Features club events, open-source projects, learning resources, and the club's mission to inspire developers.",
    type: "Full-Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML", "CSS"],
    featured: true,
    liveUrl: "https://www.devclub.iiitdm.ac.in/",
    image: "/project1.png"
  },
  {
    id: "2",
    title: "Retail Store Analysis Dashboard",
    description: "Business Intelligence dashboard built with Power BI to analyze retail data and drive actionable insights for business improvement. Features comprehensive data visualization and analytics.",
    type: "Full-Stack",
    technologies: ["Power BI", "Data Analysis", "Business Intelligence", "Data Visualization"],
    liveUrl: "https://iiitdmacin-my.sharepoint.com/:u:/g/personal/cs23i1010_iiitdm_ac_in/EZqwz7qwfZ9Mku7Y9X8QlVEBPoLXFBJXohztLbAtD_94MQ?e=kUqMTa",
    image: "/project2.png"
  },
  {
    id: "3",
    title: "Universal IoT Sensor Hub",
    description: "Smart IoT system for collecting, processing, and managing data from all types of sensors. Enables real-time monitoring, automation, and intelligent decision-making across various applications for smart home appliances.",
    type: "Full-Stack",
    technologies: ["IoT", "Sensors", "Real-time Processing", "Automation", "JavaScript"],
    featured: true,
    image: "/project3.png"
  },
  {
    id: "4",
    title: "Full Stack Portfolio Projects",
    description: "Collection of MERN stack projects showcasing proficiency in MongoDB, Express.js, React, and Node.js. Includes various web applications with RESTful APIs, authentication systems, and responsive user interfaces.",
    type: "Full-Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Bootstrap", "SQL"],
    githubUrl: "https://github.com/sainatha-reddy",
    image: "/placeholder.jpg"
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of full-stack applications, REST APIs, and responsive web solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
