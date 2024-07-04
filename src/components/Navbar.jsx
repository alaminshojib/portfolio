import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><Link className="text-white hover:text-gray-400" to="/">Home</Link></li>
          <li><Link className="text-white hover:text-gray-400" to="/skills">Skills</Link></li>
          <li><Link className="text-white hover:text-gray-400" to="/projects">Projects</Link></li>
          <li><Link className="text-white hover:text-gray-400" to="/experience">Experience</Link></li>
          <li><Link className="text-white hover:text-gray-400" to="/education">Education</Link></li>
          <li><Link className="text-white hover:text-gray-400" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
