import React, { lazy, useState } from "react";
import Tab from "./Tab";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  };
  return (
    <div>
      <div style={styles}>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
          />
        ))}
      </div>
      <div className='content'>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
export default Tabs;