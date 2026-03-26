import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Remove the inline HTML loader after React has painted
requestAnimationFrame(() => {
  const loader = document.getElementById("app-loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 400);
  }
});
