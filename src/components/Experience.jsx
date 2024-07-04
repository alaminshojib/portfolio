import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa'; // Import icons as needed

function Experience() {
  return (
    <motion.section
      className="experience py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <motion.div
          className="job mb-12 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center mb-4">
            <FaReact className="text-blue-500 text-3xl mr-2" />
            <div>
              <h3 className="text-2xl font-semibold">Frontend Developer</h3>
              <h4 className="text-xl text-gray-700">ABC Company</h4>
            </div>
          </div>
          <p className="text-gray-800">
            Developed interactive user interfaces using React.js. Collaborated
            with designers to implement beautiful and responsive web designs.
          </p>
        </motion.div>
        
        <motion.div
          className="job mb-12 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center mb-4">
            <FaNodeJs className="text-green-500 text-3xl mr-2" />
            <div>
              <h3 className="text-2xl font-semibold">Backend Developer</h3>
              <h4 className="text-xl text-gray-700">XYZ Tech</h4>
            </div>
          </div>
          <p className="text-gray-800">
            Built scalable backend solutions using Node.js and MongoDB. Managed
            RESTful APIs for data retrieval and manipulation.
          </p>
        </motion.div>

        {/* Add more experiences similarly */}
      </div>
    </motion.section>
  );
}

export default Experience;
