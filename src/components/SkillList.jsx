import React, { useState, useEffect } from "react";

const SkillList = ({ title, contentList }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <br />
      <div className="row skill-list">
        <h4 className="col-sm-4 pt-2">{title}</h4>
        <ul className="col-sm-8 list-group list-group-flush">
          {contentList.map((item, index) => (
            <li
              key={index}
              className={`list-group-item `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SkillList;
