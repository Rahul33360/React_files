/**
 * 
 * HMR - Hot Module Reloading - allows developers to update modules in a running application without reloading the page

 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * 
 * 
 * 
 * 
 * 
 * Transitive Dependencies
 * 
 */


// Tree Shaking - a JavaScript technique that removes unused code from a bundle of files to improve performance and reduce file size


import React from "react";
import ReactDOM from "react-dom/client";

const head = React.createElement(
  "h1",
  {
    id: "welcome message",
  },
  "Hello React! "
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const head2 = React.createElement(
  "h2",
  {
    id: "head2",
  },
  "Hello .createElement of React"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [head, head2]
);

root.render(container);
