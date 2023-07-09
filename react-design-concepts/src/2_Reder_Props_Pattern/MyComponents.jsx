import React from "react";

const MyComponents = () => {
  const renderContent = () => {
    return <h3>This is return RenderContent</h3>;
  }
  return (
    <div>
      <h1>Main My Components</h1>
      <RenderProps renderContents={renderContent()} />
    </div>
  );
};
export default MyComponents;


function RenderProps(props) {
  const MyRender = <h3>This is a function of MyRender.</h3>;
  return (
    <div>
      <h2>Return MyRender Props:</h2>
      {MyRender}
      <h2>Render Contents</h2>
      {props.renderContents}
    </div>
  );
}