import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>&copy; 2023 John Doe. All Rights Reserved.</p>
      <div className="social-links mt-2">
        <a href="https://linkedin.com/in/your-profile" className="text-blue-400 mx-2">LinkedIn</a>
        <a href="https://github.com/your-profile" className="text-gray-400 mx-2">GitHub</a>
        <a href="https://facebook.com/your-profile" className="text-blue-600 mx-2">Facebook</a>
      </div>
    </footer>
  );
}

export default Footer;
