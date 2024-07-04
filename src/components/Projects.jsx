import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  const projects = [
    {
      title: "Life Partner-Matrimony Website",
      description:
        "A platform designed to connect individuals seeking life partners, featuring detailed biodata listings and success stories.",
      features: [
        "Premium member profiles",
        "User authentication",
        "Admin and user dashboards",
      ],
      liveLink: "https://life-partner-matrimony.web.app/",
      clientRepo:
        "https://github.com/alaminshojib/Life-Partner-Matrimony-Platform",
      serverRepo: "https://github.com/alaminshojib/Life-Partner-Matrimony-Server",
      image: "https://via.placeholder.com/300?text=Life+Partner", // Placeholder image URL
    },
    {
      title: "Painting and Drawing Website",
      description: "An e-commerce platform for art and craft items.",
      features: [
        "Variety of art and craft items",
        "Category or subcategory",
        "Accounts and profiles",
      ],
      liveLink: "https://art-craft-store-client.web.app/",
      clientRepo:
        "https://github.com/programming-hero-web-course-4/B9A10-client-side-alaminshojib",
      serverRepo:
        "https://github.com/programming-hero-web-course-4/b9a10-server-side-alaminshojib",
      image: "https://via.placeholder.com/300?text=Painting+Website", // Placeholder image URL
    },
    {
      title: "Hotel Booking Website",
      description:
        "A comprehensive platform for booking accommodations.",
      features: [
        "Budget-friendly to luxurious options",
        "Easy location of hotels",
        "Firebase Authentication",
      ],
      liveLink: "https://hotel-booking-platform-2229c.web.app/",
      clientRepo:
        "https://github.com/Programming-Hero-web-course/b9a11-client-side-alaminshojib",
      serverRepo:
        "https://github.com/Programming-Hero-web-course/b9a11-server-side-alaminshojib",
      image: "https://via.placeholder.com/300?text=Hotel+Booking", // Placeholder image URL
    },
  ];

  return (
    <section className="projects py-20 bg-gray-900 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white font-bold mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <ul className="list-disc list-inside mb-4 text-left">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-base mb-1 text-gray-700">
                      {feature}
                    </li>
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
