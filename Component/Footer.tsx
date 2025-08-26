import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4">
      <div className="mx-auto w-11/12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved by Md Iffat Bari.</p>

        
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="https://www.linkedin.com/in/mdiffatbari/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/mdiffatbari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://mdiffatbari.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
          >
            <FaGlobe size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
