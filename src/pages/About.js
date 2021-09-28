import React from "react";
import "../styles/About.css";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis adipisci repellendus earum sequi, voluptatum quisquam nihil, porro amet excepturi numquam qui odit officiis magnam doloremque assumenda. Exercitationem cumque
          inventore eligendi veniam, et tenetur quasi aperiam nihil asperiores itaque at quisquam, repudiandae mollitia doloremque corrupti, omnis hic quis. Dolor ipsa similique, eum earum, magni sunt sed, error eos perspiciatis incidunt
          debitis.
        </p>
      </div>
    </div>
  );
}

export default About;
