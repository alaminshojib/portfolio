import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import profilePic from "../assets/pic.jpg"; // Add your profile picture here

function Home() {
  return (
    <section className="home text-center py-20  text-white">
      <div className="container mx-auto flex items-center justify-around">
        <div>
          <h1 className="text-5xl font-bold mb-4">John Doe</h1>
          <h2 className="text-3xl mb-6">
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Expert",
                "Node.js Enthusiast",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-xl mb-6 max-w-lg mx-auto">
            Experienced developer with expertise in React, Node.js, and more. I
            build scalable and efficient web applications.
          </p>
          <a
            href="/resume.pdf"
            download
            className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded transition-colors duration-300 mb-6"
          >
            Download Resume
          </a>
        </div>
        <div>
          <img
            src={profilePic}
            alt="Profile"
            className="w-60 h-60 rounded-full mb-4 border-4 border-white shadow-lg"
          />

          <div className="social-icons flex justify-center mt-6 space-x-4">
            <a
              href="https://linkedin.com/in/your-profile"
              className="text-white text-2xl hover:text-gray-200 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-profile"
              className="text-white text-2xl hover:text-gray-200 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com/your-profile"
              className="text-white text-2xl hover:text-gray-200 transition-colors duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
