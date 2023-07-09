import React from "react";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <div>
      <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick} >
        {label}
      </div>
    </div>
  );
};

export default Tab;
