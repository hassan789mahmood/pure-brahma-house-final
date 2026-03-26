import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

function removeLoader() {
  const loader = document.getElementById("app-loader");
  if (!loader) return;
  loader.style.transition = "opacity 0.6s ease";
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 600);
}

let loaderRemoved = false;

function hideLoader() {
  if (loaderRemoved) return;
  loaderRemoved = true;
  removeLoader();
}

requestAnimationFrame(() => {
  // Max wait 8s so loader never gets stuck
  setTimeout(hideLoader, 8000);

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
});
