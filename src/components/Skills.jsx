import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Importing icons from react-icons library
import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations

function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="skills py-20 bg-gradient-to-r from-blue-500 to-teal-500 text-white"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
            <ul className="text-lg text-left">
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center mb-4"
              >
                <FaCheck className="mr-2 text-green-500" />
                JavaScript
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center mb-4"
              >
                <FaCheck className="mr-2 text-green-500" />
                React
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center mb-4"
              >
                <FaCheck className="mr-2 text-green-500" />
                Node.js
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center mb-4"
              >
                <FaCheck className="mr-2 text-green-500" />
                HTML/CSS
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center mb-4"
              >
                <FaCheck className="mr-2 text-green-500" />
                Git
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Soft Skills</h3>
            <ul className="text-lg text-left">
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center mb-4"
              >
                <FaCheck className="mr-2 text-green-500" />
                Communication
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center mb-4"
              >
                <FaCheck className="mr-2 text-green-500" />
                Teamwork
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center mb-4"
              >
                <FaCheck className="mr-2 text-green-500" />
                Problem-solving
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
