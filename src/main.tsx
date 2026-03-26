import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Wait until every <img> in the page has finished loading
function hideLoader() {
  const loader = document.getElementById("app-loader");
  if (!loader) return;
  loader.style.transition = "opacity 0.6s ease";
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 600);
}

function checkImages() {
  const images = Array.from(document.querySelectorAll("img"));
  if (images.length === 0) {
    hideLoader();
    return;
  }
  const promises = images.map((img) => {
    if (img.complete) return Promise.resolve();
    return new Promise<void>((resolve) => {
      img.addEventListener("load", () => resolve(), { once: true });
      img.addEventListener("error", () => resolve(), { once: true });
    });
  });
  Promise.all(promises).then(hideLoader);
}

// Give React a frame to render, then start watching images
requestAnimationFrame(() => {
  // Also set a max wait time of 8s so the loader never gets stuck
  const timeout = setTimeout(hideLoader, 8000);
  const originalHide = hideLoader;
  let hidden = false;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _orig = hideLoader;
  hideLoader = () => {
    if (hidden) return;
    hidden = true;
    clearTimeout(timeout);
    originalHide();
  };
  checkImages();
});
