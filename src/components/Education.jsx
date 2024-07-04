import React from 'react';

function Education() {
  const educations = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Example",
      details: "Graduated with honors. Specialized in software engineering and computer systems."
    },
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Business School of Example",
      details: "Focused on strategic management and entrepreneurship. Achieved highest GPA in cohort."
    },
    {
      degree: "Diploma in Web Development",
      institution: "Tech Institute of Example",
      details: "Hands-on training in front-end and back-end development. Developed several projects."
    }
  ];

  return (
    <section className="education py-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educations.map((edu, index) => (
            <div key={index} className="degree bg-gray-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <h4 className="text-lg text-gray-600 mb-4">{edu.institution}</h4>
              <p className="text-gray-700">{edu.details}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
