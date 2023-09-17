import React from "react";

import workshopConfig from "../../config/achievementConfig";
import CardItem from "../../components/Cards/CardItem.jsx";

import "./Achievements.css";

const Achievements = () => {
  return (
    <section>
      <h4 style={{ textAlign: "center" }}>Workshops and Seminars Attended</h4>

      <div className="wrapper">
        {workshopConfig.map((item) => (
          <CardItem
            id={item.id}
            title={item.about}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
