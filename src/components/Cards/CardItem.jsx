import React from "react";
import "./CardItem.css";

const CardItem = ({ id, title, description }) => {
  return (
    <div className={"card"} key={id}>
      <div className={"card__body"}>
        <h6 className={"card__title"}>
          <strong>{title}</strong>
        </h6>

        <hr className={"card__line"} />
      </div>
    </div>
  );
};

export default CardItem;
