import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi'; // Import icons as needed

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB.",
      features: ["Product catalog", "User authentication", "Shopping cart"],
      liveLink: "https://example.com",
      clientRepo: "https://github.com/client",
      serverRepo: "https://github.com/server"
    },
    {
      title: "Blog Website",
      description: "A blog platform developed using React and Express, featuring rich text editing and user comments.",
      features: ["Article management", "User profiles", "Comment system"],
      liveLink: "https://example.com",
      clientRepo: "https://github.com/client",
      serverRepo: "https://github.com/server"
    },
    {
      title: "Task Manager App",
      description: "A task management web application built with React and Firebase.",
      features: ["Task lists", "Real-time updates", "User collaboration"],
      liveLink: "https://example.com",
      clientRepo: "https://github.com/client",
      serverRepo: "https://github.com/server"
    }
  ];

  return (
    <section className="projects py-20 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <ul className="list-disc list-inside mb-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-base mb-1">{feature}</li>
                  ))}
                </ul>
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.liveLink}
                    className="text-blue-500 hover:text-blue-600 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <FiExternalLink className="ml-1" />
                  </a>
                  <a
                    href={project.clientRepo}
                    className="text-blue-500 hover:text-blue-600 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Client <FiExternalLink className="ml-1" />
                  </a>
                  <a
                    href={project.serverRepo}
                    className="text-blue-500 hover:text-blue-600 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Server <FiExternalLink className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
