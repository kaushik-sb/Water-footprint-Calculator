import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import "./WaterFootprint.css"; // Importing the CSS for other styles
import Navbar from "./components/Navbar";

const WaterFootprint = () => {
  // Applying inline styles for the background image
  const backgroundStyle = {
    backgroundImage: `url("/background_water.jpg")`, // Ensure image is in the 'public' folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", // Full viewport height
    display: "flex",
    flexDirection: "column",
    color: "#fff" // White text to contrast with background
  };

  return (
    <div className="water-footprint-page">
      <div style={backgroundStyle} className="water-footprint-container">
        {/* Logo and Nav */}
        <Navbar />
        {/* Main content */}
        <main>
          <section className="intro">
            <h1>WHAT'S YOUR WATER FOOTPRINT?</h1>
            <p>
              Discover your water consumption and learn how to reduce your footprint for a more
              sustainable future.
            </p>
            <button className="cta-button cta-exclusive">
            <Link to="/Searchpage">Find Your Footprint</Link>
              
              <img src="/arrow.svg" alt="Arrow" className="arrow-icon" /> {/* Reference the SVG */}
            </button>
          </section>
        </main>
      </div>

      {/* New "DIVE DEEPER" Section */}
      <section className="dive-deeper-section">
        <h2>DIVE DEEPER</h2>
        <div className="dive-deeper-cards">
          {/* Card 1 */}
          <div className="dive-deeper-card">
            <img src="/water-drop-icon.png" alt="Water Footprint 101" />
            <h3>WATER FOOTPRINT 101</h3>
            <button className="deep-button">
    <Link to="/FootprintInfo">THE BASICS OF WATER FOOTPRINT</Link>
</button>
          </div>

          {/* Card 2 */}
          <div className="dive-deeper-card">
            <img src="/education-icon.png" alt="Educational Resources" />
            <h3>EDUCATIONAL RESOURCES</h3>
            <button className="deep-button">TEACHING ABOUT WATER FOOTPRINT</button>
          </div>

          {/* Card 3 */}
          <div className="dive-deeper-card">
            <img src="/shower-icon.png" alt="How to Save Water" />
            <h3>HOW TO SAVE WATER</h3>
            <button className="deep-button">TIPS FOR USING LESS WATER</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterFootprint;
