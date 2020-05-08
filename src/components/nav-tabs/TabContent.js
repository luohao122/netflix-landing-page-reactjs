import "./TabContent.css";
import React from "react";

const TabContent = ({ id, content, defaultClass }) => {
  return (
    <div id={id} className={`tab-content-item ${defaultClass}`}>
      {content}
    </div>
  );
};

export default TabContent;
