import React from "react"
import ReactDOM from "react-dom/client"


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
const headings = React.createElement("div",{className:"title"},[
  React.createElement("h1",{},"hi this is react"),
  React.createElement("h2",{},"hi this is react "),
  React.createElement("h3",{},"hi this is react")
])
const headerelement = ReactDOM.createRoot(document.getElementById("headerelement"));
headerelement.render(headings)



 