import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";

let heading = document.createElement("h1");
let root = document.getElementById("root");
heading.textContent = "Hello World!";
heading.classList.add("heading");
root.appendChild(heading);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <App /> */}
//     <Navbar />
//   </StrictMode>
// );
