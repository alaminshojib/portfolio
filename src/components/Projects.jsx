import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import lifePic from "../assets/life.png";
import hotelPic from "../assets/hotel.png";
import artPic from "../assets/art.png";

function Projects() {
  const projects = [
    {
      image: lifePic,
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
      serverRepo:
        "https://github.com/alaminshojib/Life-Partner-Matrimony-Server",
    },
    {
      image: artPic,
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
    },
    {
      image: hotelPic,
      description: "A comprehensive platform for booking accommodations.",
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
    },
  ];

  return (
    <section className="projects p-10 bg-gray-900 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white font-bold mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project bg-white bg-opacity-20 text-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="mb-4">{project.description}</p>
                <ul className="list-disc list-inside mb-4 text-left">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-base mb-1">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center space-x-4">
                  <ProjectLink link={project.liveLink} text="Live Demo" icon={<FiExternalLink />} />
                  <ProjectLink link={project.clientRepo} text="GitHub Client" icon={<FiExternalLink />} />
                  <ProjectLink link={project.serverRepo} text="GitHub Server" icon={<FiExternalLink />} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectLink = ({ link, text, icon }) => (
  <a
    href={link}
    className="text-blue-500 hover:text-blue-900 flex items-center rounded-full py-2 px-4 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </a>
);

export default Projects;
