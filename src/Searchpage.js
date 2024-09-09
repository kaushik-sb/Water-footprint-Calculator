import React from "react";
import "./WaterFootprint.css"; // Importing the CSS for other styles
import Navbar from "./components/Navbar";

const SearchPage = () => {
  // Inline CSS for the background image
  const backgroundStyle = {
    backgroundImage: `url("/background_water.jpg")`, // Ensure the image is in the 'public' folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Full viewport height
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  // Search bar styling
  const searchBoxStyle = {
    marginTop: '100px', // Increased this value to create a larger gap between text and search box
  };

  return (
    <div style={backgroundStyle}>
      <Navbar />
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
        
        {/* Use intro class for styling */}
        <section className="intro" style={{ marginTop: '-100px' }}> {/* Moved the heading and text up */}
          <h1>Search for Any Food Product</h1>
          <p>
            It includes your tap water use and the "virtual water" used to produce your food, electricity, gas, and home goods.
          </p>
        </section>

        {/* Search box stays in its position */}
        <div style={searchBoxStyle}>
          <input 
            type="text" 
            placeholder="Search..." 
            style={{
              padding: '10px',
              fontSize: '1em',
              width: '300px',
              borderRadius: '25px',
              border: '1px solid #ccc',
              marginRight: '10px'
            }} 
          />

        </div>
      </main>
    </div>
  );
};

export default SearchPage;
