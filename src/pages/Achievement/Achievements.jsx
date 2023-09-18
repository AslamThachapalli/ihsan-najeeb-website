import React from "react";

import {
  publicationConfig,
  workshopConfig,
} from "../../config/achievementConfig";
import CardItem from "../../components/Cards/CardItem.jsx";

import "./Achievements.css";

const Achievements = () => {
  return (
    <section>
      <h4 style={{ textAlign: "center" }}>Publications and Presentations</h4>

      <div className="wrapper">
        {publicationConfig.map((item) => (
          <CardItem key={item.id} title={item.about} link={item.link} />
        ))}
      </div>

      <hr style={{ width: "80%", margin: "auto" }} />
      <br />

      <h4 style={{ textAlign: "center" }}>Workshops and Seminars Attended</h4>

      <div className="wrapper">
        {workshopConfig.map((item) => (
          <CardItem
            key={item.id}
            title={item.about}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
