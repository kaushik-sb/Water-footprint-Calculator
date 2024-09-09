import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import "./WaterFootprint.css"; // Importing the CSS for other styles
import Navbar from "./components/Navbar";

const FootprintInfo = () => {
  const backgroundStyle = {
    backgroundImage: `url("/background_water.jpg")`, // Ensure image is in the 'public' folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Full viewport height
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
        <main className="content-section">
          {/* Content Section */}
          <section className="content">
            <h2>What is a Water Footprint?</h2>
            <p>
              It is important for individuals, households, businesses, and countries to ask, “What is a water footprint?” as they do an assessment of water use patterns at different levels.
            </p>
            <p>
              <strong>An Assessment of Water Use Patterns at Different Levels, Both Direct and Virtual.</strong> Fresh water is vital to life, but as the world’s population grows, so does its use of water. It takes water – a lot of it – to produce food, to make energy, and to manufacture consumer products. This is what’s known as virtual water and it’s important to do an assessment of water patterns at different levels of water use.
            </p>
            <p>
              Globally, the increase is due primarily to increasing virtual water use, as more people consume more water-intensive food, electricity, and consumer goods, putting increasing pressure on water resources. Strained resources are a source of both concern and conflict in the arid parts of the world – including the US – where food is grown, goods are manufactured, and water is already in short supply. Entities at many levels have started doing an assessment of water use patterns at different levels and asked, “What is a water footprint?”
            </p>
            <p>
              By the year 2030, experts predict that global demand for water will outstrip supply by 40 percent. Impacts from climate change have already led to changes to the water cycle, leading to prolonged periods of drought (and, conversely, more extreme rainfall) in some areas. Reduced water supplies could add to water insecurity both in the US and in other countries.
            </p>
            <p>
              Water footprints help individuals, businesses, and countries because they reveal water use patterns, from the individual level all the way to the national level. They shine a light on the water used in all the processes involved in manufacturing and producing our goods. They also account for the amount of water contaminated during manufacturing and production.
            </p>
            <p>
              These footprints give everyone – from individuals to business managers to public officials – a solid frame of reference that helps the world be more efficient and sustainable with water use. By understanding our water footprints, we can appreciate the role water plays in everyone’s lives.
            </p>

            <h3>Blue, Green, or Grey Water Footprints – How Are They Measured?</h3>
            <p>
              A water footprint is measured in terms of the volume of water consumed, evaporated, and polluted. The Water Footprint Network splits water footprints into three categories:
            </p>
            <ul>
              <li><strong>Blue Water Footprint:</strong> The amount of surface water and groundwater required (evaporated or used directly) to produce an item.</li>
              <li><strong>Green Water Footprint:</strong> The amount of rainwater required (evaporated or used directly) to make an item.</li>
              <li><strong>Grey Water Footprint:</strong> The amount of freshwater required to dilute wastewater generated in manufacturing, in order to maintain water quality.</li>
            </ul>
            <p>
              <strong>Who Created the Concept of Water Footprints?</strong> The concept was created by Dr. Arjen Hoekstra along with the Water Footprint Network, which has become the foremost research network in the discipline.
            </p>
          </section>
          <div className="footer-section">
            <button className="cta-button">
              <Link to="/" className="cta-link">Find Your Footprints</Link>
              <img src="/arrow.svg" alt="Arrow" className="arrow-icon" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FootprintInfo;
