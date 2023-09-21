import React from "react";
import skillConfig from "../../config/skillConfig";
import SkillList from "../../components/SkillList";

import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <SkillList
        title="Area of Expertise"
        contentList={skillConfig.areaOfExpertise}
      />

      <SkillList title="Hard Skills" contentList={skillConfig.techSkills} />

      <SkillList title="Other Skills" contentList={skillConfig.otherSkills} />

      <br />
    </div>
  );
};

export default Skills;
