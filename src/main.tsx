import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { preloadSiteImages } from "./lib/preload-site-assets";

createRoot(document.getElementById("root")!).render(<App />);

const MIN_DISPLAY_MS = 1200;
const MAX_WAIT_MS = 15000;
const startTime = Date.now();
let loaderHidden = false;

const hideLoader = () => {
  if (loaderHidden) return;
  loaderHidden = true;

  const elapsed = Date.now() - startTime;
  const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

  window.setTimeout(() => {
    const loader = document.getElementById("app-loader");
    if (!loader) return;
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    window.setTimeout(() => loader.remove(), 700);
  }, remaining);
};

window.setTimeout(hideLoader, MAX_WAIT_MS);

window.addEventListener(
  "load",
  () => {
    preloadSiteImages().finally(() => {
      window.setTimeout(hideLoader, 250);
    });
  },
  { once: true }
);
