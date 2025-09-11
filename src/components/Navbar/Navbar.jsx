import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const [isscrolled, setIsscrolled] = useState(false);

  const [activeitem, setActiveitem] = useState("");

  const handlemenuitemclick = (sectionid) => {
    setActiveitem(sectionid);
    setIsopen(false);
    const section = document.getElementById(sectionid);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handlescroll = () => setIsscrolled(window.scrollY > 50);
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    // { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isscrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Uzair</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Riaz</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeitem === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button
                className="cursor-pointer"
                onClick={() => handlemenuitemclick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/uzai-rriaz1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/uzair-riaz-581846374"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="md:hidden">
          {isopen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsopen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsopen(true)}
            />
          )}
        </div>
        {isopen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`cursor-pointer hover:text-white ${
                      activeitem === item.id ? "text-[#8245ec]" : ""
                    }`}
                  >
                    <button onClick={() => handlemenuitemclick(item.id)}>
                      {item.label}
                    </button>
                  </li>
                );
              })}
              <div className="flex space-x-4">
                {" "}
                <a
                  href="https://github.com/uzai-rriaz1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/uzair-riaz-581846374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaLinkedin />
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
