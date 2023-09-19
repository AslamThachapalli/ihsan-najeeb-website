import { React, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Modal from "../Modal/Modal";

import "./Timeline.css";

const Timeline = (props) => {
  function handleCardClick(item) {
    setSelectedItem(item);
    setIsOpen(true);
  }

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      {isOpen && (
        <Modal
          key={`modal-${selectedItem.id}`}
          title={selectedItem.title}
          subtitle={selectedItem.company}
          content={selectedItem.description}
          setIsOpen={setIsOpen}
          isListedContent={true}
        />
      )}
      <VerticalTimeline>
        {props.items.map((item) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={item.date}
            icon={item.icon}
            key={item.id}
            onTimelineElementClick={() => handleCardClick(item)}
          >
            <h2 className="vertical-timeline-element-title">
              <strong>{item.title}</strong>
            </h2>
            <h4 className="vertical-timeline-element-subtitle">
              {item.company}
            </h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
