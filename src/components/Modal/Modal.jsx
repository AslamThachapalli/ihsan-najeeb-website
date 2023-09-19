import React from "react";

import "./Modal.css";

const Modal = ({ title, description, listContent, setIsOpen }) => {
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <h3>{title}</h3>
          {listContent &&
            listContent.map((item, index) => (
              <h5 key={`content-${index}`}>{item}</h5>
            ))}
          {description && <h5>{description}</h5>}

          <button className="close-btn" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
