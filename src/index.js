// const root = document.getElementById("root");
// const p = document.createElement("p");
// p.innerText = "Hello from Abhishek 2";

// root.appendChild(p);


import React from "react"
import ReactDOM from "react-dom/client"
const child1 = React.createElement("p", {}, "I am child 1");
const child2 = React.createElement("p", {}, "I am child 2");
// const div=<div className="text"> hello jsx </div> // its jsx it will work after weback setup
const div = React.createElement("div", { className: 'text' },
    // "hello from Abhishek 3 inside react"
    [child1, child2]
);
console.log(div)
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(div);