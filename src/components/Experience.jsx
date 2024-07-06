import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { GiCow } from 'react-icons/gi'; // Icon for the Dairy Research Network

function Experience() {
  const experiences = [
    {
      role: 'Research Associate',
      company: 'Integrated Dairy Research Network',
      icon: <GiCow className="text-yellow-500 text-4xl mr-4" />,
      description: `Conducted research on dairy production and management systems.
                    Developed innovative solutions to improve dairy farm efficiency
                    and productivity. Collaborated with cross-functional teams to
                    implement sustainable practices and presented findings at
                    industry conferences.`,
      duration: 'Jan 2021 - Present',
    },
    // Add more experiences here
  ];

  return (
    <motion.section
      className="experience p-10 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-12">Experience</h2>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="job mb-5 bg-white  bg-opacity-20 text-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
          >
            <div className="flex items-center mb-6">
              {exp.icon}
              <div>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <h4 className="text-xl ">{exp.company}</h4>
                <span className="text-gray-400">{exp.duration}</span>
              </div>
            </div>
            <p className="">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;
