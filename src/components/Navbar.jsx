import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

function Navbar() {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center ">
     
        <h1 className="text-white text-2xl font-bold"> <Typewriter
              words={[
              "MD. Al-AMIN",
                "Full Stack Developer"
                
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
               className="text-white text-2xl font-bold"
            /></h1>
        <ul className="flex space-x-6">
          <li><Link className="text-white hover:text-red-400" to="/">Home</Link></li>
          <li><Link className="text-white hover:text-red-400" to="/skills">Skills</Link></li>
          <li><Link className="text-white hover:text-red-400" to="/projects">Projects</Link></li>
          <li><Link className="text-white hover:text-red-400" to="/experience">Experience</Link></li>
          <li><Link className="text-white hover:text-red-400" to="/education">Education</Link></li>
          <li><Link className="text-white hover:text-red-400" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
