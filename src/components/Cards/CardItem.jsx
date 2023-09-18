import React from "react";
import ConditionalWrapper from "../ConditionalWrapper";

import "./CardItem.css";

const CardItem = ({ title, description, link }) => {
  return (
    <ConditionalWrapper
      condition={link}
      wrapper={(children) => (
        <a
          style={{ display: "flex", textDecoration: "none", color: "inherit" }}
          href={link}
          target="_blank"
        >
          {children}
        </a>
      )}
    >
      <div className={"card"}>
        <div className={"card__body"}>
          <h6 className={"card__title"}>
            <strong>{title}</strong>
          </h6>

          <hr className={"card__line"} />
        </div>
      </div>
    </ConditionalWrapper>
  );
};

export default CardItem;
