import React, { useEffect, useState } from "react";

import {
  publicationConfig,
  workshopConfig,
  educationConfig,
  certificationConfig,
} from "../../config/achievementConfig";
import CardItem from "../../components/Cards/CardItem.jsx";
import Modal from "../../components/Modal/Modal";

import "./Achievements.css";

function screenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

const Achievements = () => {
  function handleCardClick(item) {
    setSelectedItem(item);
    setIsOpen(true);
  }

  const width = screenWidth();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section>
      {isOpen && (
        <Modal
          key={`modal-${selectedItem.id}`}
          title={selectedItem.about}
          content={selectedItem.description}
          setIsOpen={setIsOpen}
        />
      )}

      <br />
      <h4 style={{ textAlign: "center" }}>Education</h4>
      <ul className="list-group text_content_wrapper">
        {educationConfig.map((item) => (
          <li key={item.id} className="list-group-item align-center">
            <span style={{ fontWeight: "bold", marginRight: "8px" }}>
              {item.degreeType}
            </span>
            {width >= 768 ? item.college : null}
            <p className="d-block d-md-none" style={{ marginBottom: "4px" }}>
              {item.college}
            </p>
          </li>
        ))}
      </ul>

      <br />
      <h4 style={{ textAlign: "center" }}>Certifications</h4>
      <ul className="list-group text_content_wrapper">
        {certificationConfig.map((item) => (
          <li key={item.id} className="list-group-item align-center">
            <span
              style={{
                fontWeight: "bold",
                marginRight: "8px",
                textTransform: "capitalize",
              }}
            >
              {item.topic}
            </span>

            <p style={{ marginBottom: "4px" }}>{item.from}</p>

            <h6>{item.description}</h6>
          </li>
        ))}
      </ul>

      <br />
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
            customClickEvent={() => handleCardClick(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
