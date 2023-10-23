import React from "react";
import { Link } from "react-router-dom"; 
// Import Link from react-router-dom

const NavBar = () => {
  return (
    <div>
      <nav className="bg-slate-50 fixed z-10 mx-auto mr-auto w-screen max-w-[100vw]">
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Add a Link to the Home page */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Add a Link to the About page */}
          </li>
          <li>
            <Link to="/project">Project</Link> {/* Add a Link to the Contact page */}
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* Add a Link to the Contact page */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
