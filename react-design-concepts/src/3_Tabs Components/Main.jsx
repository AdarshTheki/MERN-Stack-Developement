import React from "react";
import Tabs from "./Tabs";

const Main = () => {
  // this is a Data of Tabs
  const tabs = [
    {
      id: "tab1",
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      id: "tab2",
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
    {
      id: "tab3",
      label: "Tab 3",
      content: <div>Content for Tab 3</div>,
    },
  ];

  return (
    <div>
      <h1>This is Tab Components</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Main;
