import React from "react";
import skillConfig from "../../config/skillConfig";

import "./Skills.css";

const Skills = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <h4 style={{ textAlign: "center" }}>Area of Expertise</h4>
      <ul className="list-group list-group-flush">
        {skillConfig.areaOfExpertise.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>

      <br />
      <h4 style={{ textAlign: "center" }}>Hard Skills</h4>
      <ul className="list-group list-group-flush">
        {skillConfig.techSkills.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>

      <br />

      <h4 style={{ textAlign: "center" }}>Other Skills</h4>
      <ul className="list-group list-group-flush">
        {skillConfig.otherSkills.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
