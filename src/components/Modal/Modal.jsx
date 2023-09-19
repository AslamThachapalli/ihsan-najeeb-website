import React from "react";
import { BsDot } from "react-icons/bs";

import "./Modal.css";

const Modal = ({ title, subtitle, content, setIsOpen, isListedContent }) => {
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <h3>{title}</h3>
          {subtitle && <h6 style={{ textAlign: "center" }}>{subtitle}</h6>}

          {content &&
            content.map((item, index) => (
              <h5 key={`content-${index}`}>
                {isListedContent && (
                  <span>
                    <BsDot />
                  </span>
                )}
                {item}
              </h5>
            ))}
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
