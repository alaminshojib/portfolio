import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import profilePic from "../assets/pic.jpg"; // Add your profile picture here

function Home() {
  return (
    <section className="home text-center py-20 text-white">
      <div className="container mx-auto mt-10 flex items-center justify-around">
        <div className="items-start text-left">
          <h1 className="text-5xl font-bold mb-4">MD. AL-AMIN</h1>
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
          <p className="text-xl mt-16 mb-6 max-w-lg mx-auto">
            Experienced developer with expertise in React, Node.js, and more. I
            build scalable and efficient web applications.
          </p>
          <a
            href="https://drive.google.com/file/d/1mD12hRHW1TpvN1VbazgEQuwJTZ3HBWPT/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded transition-colors duration-300 mb-6 inline-block"
          >
            Download Resume
          </a>
        </div>
        <div>
          <img
            src={profilePic}
            alt="Profile"
            className="w-72 h-72 rounded-full mb-4 border-4 border-white shadow-lg"
          />

          <div className="social-icons flex justify-center mt-6 space-x-4">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-200 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-gray-200 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
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
