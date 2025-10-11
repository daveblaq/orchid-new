import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force light mode - prevent dark mode from being applied
const enforceLightMode = () => {
  // Remove dark class if it exists
  document.documentElement.classList.remove("dark");

  // Set color scheme to light
  document.documentElement.style.colorScheme = "light";
  document.body.style.colorScheme = "light";

  // Set explicit background colors
  document.documentElement.style.backgroundColor = "#ffffff";
  document.body.style.backgroundColor = "#ffffff";

  // Prevent meta theme-color from affecting appearance
  let metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (!metaThemeColor) {
    metaThemeColor = document.createElement("meta");
    metaThemeColor.setAttribute("name", "theme-color");
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute("content", "#ffffff");
};

// Apply immediately
enforceLightMode();

// Re-apply on DOM changes (in case something tries to change it)
const observer = new MutationObserver(enforceLightMode);
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["class", "style"],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
