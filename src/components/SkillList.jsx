import React from "react";

const SkillList = ({ title, contentList }) => {
  return (
    <>
      <br />
      <h4 style={{ textAlign: "center" }}>{title}</h4>
      <ul className="list-group list-group-flush">
        {contentList.map((item, index) => (
          <li
            key={index}
            className="list-group-item"
            style={{ paddingLeft: "5%" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SkillList;
