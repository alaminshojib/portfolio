import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { GiCow } from 'react-icons/gi'; // Import a new icon for the Dairy Research Network

function Experience() {
  return (
    <motion.section
      className="experience py-20 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl text-center text-white font-bold mb-12">Experience</h2>

        <motion.div
          className="job mb-12 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <GiCow className="text-yellow-500 text-4xl mr-4" />
            <div>
              <h3 className="text-2xl font-bold">Research Associate</h3>
              <h4 className="text-xl text-gray-700">Integrated Dairy Research Network</h4>
            </div>
          </div>
          <p className="text-gray-800">
            Conducted research on dairy production and management systems. Developed
            innovative solutions to improve dairy farm efficiency and productivity.
          </p>
        </motion.div>

        {/* Add more experiences similarly */}
      </div>
    </motion.section>
  );
}

export default Experience;
