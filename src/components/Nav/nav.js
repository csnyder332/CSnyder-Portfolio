import React from "react";

function Nav() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <h1>Chris Snyder</h1>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="ml-3 text-xl">
            About Me
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Nav;