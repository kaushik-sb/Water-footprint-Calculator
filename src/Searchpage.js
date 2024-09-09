import React from "react";
// import { Link } from "react-router-dom"; // Import the Link component
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

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    gap: '20px',
  };

  // Styling for the text (h1 and p)
  const textStyle = {
    color: '#3EA0EE',
    marginBottom: '20px',
    marginTop: '10px', // Move text upwards
  };

  // Search bar styling remains the same
  const searchBoxStyle = {
    marginTop: '20px',
  };

  return (
    <div style={backgroundStyle}>
        <Navbar />
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
 
        <h1 style={{ ...textStyle }}>Search for Any Food Product</h1>
        <p style={{ ...textStyle }}>
          It includes your tap water use and the "virtual water" used to produce your food, electricity, gas, and home goods.
        </p>

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
          <button 
            style={{
              padding: '10px 20px',
              borderRadius: '25px',
              border: 'none',
              backgroundColor: '#007BFF',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            <i className="fa fa-search"></i> {/* Assuming you have FontAwesome for the icon */}
          </button>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;