import React from 'react';
import { FaCheck, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa'; // Importing icons from react-icons library
import { IoLogoJavascript } from 'react-icons/io'; // Importing JavaScript icon
import { FiUsers, FiMessageCircle, FiSettings } from 'react-icons/fi'; // Importing icons for soft skills
import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations

function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="skills p-10 text-white"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
            <ul className="text-lg">
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center mb-4"
              >
                <IoLogoJavascript className="mr-2 text-yellow-500" />
                JavaScript
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center mb-4"
              >
                <FaReact className="mr-2 text-blue-500" />
                React
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center mb-4"
              >
                <FaNodeJs className="mr-2 text-green-500" />
                Node.js
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center mb-4"
              >
                <FaHtml5 className="mr-2 text-orange-500" />
                HTML
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center mb-4"
              >
                <FaCss3Alt className="mr-2 text-blue-500" />
                CSS
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center mb-4"
              >
                <FaGitAlt className="mr-2 text-orange-500" />
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
                <FiMessageCircle className="mr-2 text-green-500" />
                Communication
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center mb-4"
              >
                <FiUsers className="mr-2 text-green-500" />
                Teamwork
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center mb-4"
              >
                <FiSettings className="mr-2 text-green-500" />
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
