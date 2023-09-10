import { useState } from "react";
import './Tabs.css'

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  let content = tabs.find((item) => item.id === activeTab);

  const Tab = ({ label, isActive, onClick }) => {
    return (
      <div className={`tab ${isActive && "active"}`} onClick={onClick}>
        {label}
      </div>
    );
  };

  return (
    <div>
      <div className='tabs'>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.name}
            isActive={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
          />
        ))}
      </div>
      <div className='content'>
        <img src={content.url} alt={content.alt} />
        <div>
          <h3>Name: {content.name}</h3>
          <p>Artist: {content.artist}</p>
          <p>Description: {content.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
