import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/logo.jpg" alt="Jala Logo" />
      </div>
      <nav>
        <ul>
          <li>Water Footprint 101</li>
          <li>How to Save Water?</li>
          <li>Educational Resources</li>
          <li>News and Articles</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
