import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const educations = [
    {
      degree: "Bachelor of Science in Animal Husbandry",
      institution: "Bangladesh Agricultural University",
      details: "Graduated with honors. Specialized in Animal management and treatment related"
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "Qadirabad Cantonment Sapper College",
      details: "Focused on strategic Science. Achieved highest GPA in cohort."
    },
    {
      degree: "Secondary School Certificate",
      institution: "S.M. Model School & College",
      details: "Hands-on Secondary academic study"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      className="education py-20 bg-gray-900 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl text-white font-bold mb-12">Education</h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              className="degree bg-gray-100 rounded-lg shadow-md p-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <h4 className="text-lg text-gray-600 mb-4">{edu.institution}</h4>
              <p className="text-gray-700">{edu.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Education;
