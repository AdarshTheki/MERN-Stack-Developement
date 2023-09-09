import React from "react";
import Tabs from "./Tabs";
import {sculptureList} from '../data'

const Main = () => {
  return (
    <div className="main">
      <h2>This is Tab Components</h2>
      <Tabs tabs={sculptureList} />
    </div>
  );
};

export default Main;

/*
1. React Components Pattern ? And its types to use?
  - Functional Components
  - Class Components
  - Render Props
  - Higher Order Component (HOC)
  - React hooks 
  - Tabs component  
  Tabs are a common UI pattern used to organize content into multiple sections, 
*/