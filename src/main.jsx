import React from "react";
import { createRoot } from "react-dom/client";
import RedBookAppPrototype from "./RedBook_App_Prototype.jsx";
import "./app.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RedBookAppPrototype />
  </React.StrictMode>
);
