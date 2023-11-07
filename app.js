import React from "react";
import ReactDOM from "react-dom/client";

//js

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world program using js";

// const heading1 = document.createElement("h2");
// heading1.innerHTML = "Hello world";

// const root = document.getElementById("root");
// root.appendChild(heading);
// root.appendChild(heading1);

// React
// const heading2 = React.createElement("div", {}, [
//   React.createElement("h1", {}, "Hello world using React"),
//   React.createElement("h2", {}, "Hello world "),
// ]);
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));
// root1.render(heading2);

// create a nested header element using React.createelement
// const headings = React.createElement("div",{className:"title"},[
//   React.createElement("h1",{},"hi this is react"),
//   React.createElement("h2",{},"hi this is react "),
//   React.createElement("h3",{},"hi this is react")
// ])
// const headerelement = ReactDOM.createRoot(document.getElementById("headerelement"));
// headerelement.render(headings)

// create the same element using jsx
// const Headings = (<div>
//   <h1>hi this is react</h1>
//   <h2>hi this is react</h2>
//   <h3>hi this is react</h3>
// </div>)
// const root = ReactDOM.createRoot(document.getElementById("headerelement"))
// root.render(<Headings/>)


// create the functionalcomponent of the same with jsx
const Paragraph = () => {
  return(
  <div>
    <h5>this is a single line paragraph</h5>
  </div>);
};
const Heading = () => {
  return (
    <div>
      <h1>hi this is react 1</h1>
      <h2>hi this is react 2 </h2>
      <h3>hi this is react3 </h3>
      <Paragraph />
      {Paragraph()}
      <Paragraph></Paragraph>
    </div>
  );
};

const root1 = ReactDOM.createRoot(document.getElementById("headerelement"));
root1.render(<Heading/>);
