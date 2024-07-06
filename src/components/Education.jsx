import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const educations = [
    {
      degree: "Bachelor of Science in Animal Husbandry",
      institution: "Bangladesh Agricultural University",
      details: "Graduated with honors. Specialized in animal management and treatment.",
      duration: "2018 - 2022"
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "Qadirabad Cantonment Sapper College",
      details: "Focused on strategic Science. Achieved highest GPA in cohort.",
      duration: "2016 - 2018"
    },
    {
      degree: "Secondary School Certificate",
      institution: "S.M. Model School & College",
      details: "Completed secondary academic study with hands-on learning.",
      duration: "2014 - 2016"
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
      className="education py-20 px-10 bg-gray-900 text-center"
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
              className="degree bg-gray-800 text-white rounded-lg shadow-md p-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
              <h4 className="text-xl text-gray-400 mb-2">{edu.institution}</h4>
              <span className="text-gray-500 block mb-4">{edu.duration}</span>
              <p className="text-gray-300">{edu.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Education;
