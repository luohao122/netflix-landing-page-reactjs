import "./Tab.css";
import React from "react";

const Tab = ({ onClickTab, iconName, id, text, defaultClass }) => {
  return (
    <div onClick={onClickTab} id={id} className={`tab-item ${defaultClass}`}>
      <i className={iconName}></i>
      <p className="hide-sm">{text}</p>
    </div>
  );
};

export default Tab;
