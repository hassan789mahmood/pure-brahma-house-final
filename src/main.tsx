import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

let loaderRemoved = false;
const startTime = Date.now();
const MIN_DISPLAY_MS = 1500; // show loader at least 1.5s
const MAX_WAIT_MS = 12000;   // never wait longer than 12s

function removeLoader() {
  if (loaderRemoved) return;
  loaderRemoved = true;

  const elapsed = Date.now() - startTime;
  const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

  setTimeout(() => {
    const loader = document.getElementById("app-loader");
    if (!loader) return;
    loader.style.transition = "opacity 0.6s ease";
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 600);
  }, remaining);
}

function allImagesLoaded(): Promise<void> {
  const images = Array.from(document.querySelectorAll("img"));
  if (images.length === 0) return Promise.resolve();
  return Promise.all(
    images.map((img) => {
      if (img.complete && img.naturalHeight > 0) return Promise.resolve();
      return new Promise<void>((resolve) => {
        img.addEventListener("load", () => resolve(), { once: true });
        img.addEventListener("error", () => resolve(), { once: true });
      });
    })
  ).then(() => {});
}

// Safety timeout
setTimeout(removeLoader, MAX_WAIT_MS);

// Use MutationObserver to wait for all images including lazily rendered ones
const observer = new MutationObserver(() => {
  // Check if key sections have rendered (footer is last)
  const footer = document.querySelector("footer");
  if (footer) {
    observer.disconnect();
    // Now wait for ALL images to finish loading
    allImagesLoaded().then(removeLoader);
  }
});

observer.observe(document.getElementById("root")!, {
  childList: true,
  subtree: true,
});
