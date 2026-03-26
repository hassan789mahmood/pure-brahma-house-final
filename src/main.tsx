import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { preloadSiteImages } from "./lib/preload-site-assets";

createRoot(document.getElementById("root")!).render(<App />);

const MIN_DISPLAY_MS = 2000; // show loader at least 2s
const MAX_WAIT_MS = 20000;   // safety cap at 20s
const startTime = Date.now();
let loaderHidden = false;

function hideLoader() {
  if (loaderHidden) return;
  loaderHidden = true;

  const elapsed = Date.now() - startTime;
  const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

  window.setTimeout(() => {
    const loader = document.getElementById("app-loader");
    if (!loader) return;
    loader.style.transition = "opacity 0.8s ease";
    loader.style.opacity = "0";
    window.setTimeout(() => loader.remove(), 800);
  }, remaining);
}

// Safety timeout — never stuck forever
window.setTimeout(hideLoader, MAX_WAIT_MS);

// Wait for ALL of these before hiding:
// 1. window.load (all initial resources)
// 2. preloadSiteImages (force-download every image asset)
// 3. All <img> tags in DOM are complete
// 4. Fonts are ready
// 5. Footer exists in DOM (all sections rendered)

function waitForDomImages(): Promise<void> {
  const imgs = Array.from(document.querySelectorAll("img"));
  return Promise.all(
    imgs.map((img) => {
      if (img.complete && img.naturalHeight > 0) return Promise.resolve();
      return new Promise<void>((resolve) => {
        img.addEventListener("load", () => resolve(), { once: true });
        img.addEventListener("error", () => resolve(), { once: true });
        // Timeout per image — don't let one broken image hold everything
        window.setTimeout(resolve, 8000);
      });
    })
  ).then(() => {});
}

function waitForFonts(): Promise<void> {
  if (document.fonts && document.fonts.ready) {
    return document.fonts.ready.then(() => {});
  }
  return Promise.resolve();
}

function waitForFooter(): Promise<void> {
  return new Promise((resolve) => {
    if (document.querySelector("footer")) {
      resolve();
      return;
    }
    const observer = new MutationObserver(() => {
      if (document.querySelector("footer")) {
        observer.disconnect();
        resolve();
      }
    });
    observer.observe(document.getElementById("root")!, {
      childList: true,
      subtree: true,
    });
    // Safety
    window.setTimeout(() => {
      observer.disconnect();
      resolve();
    }, 10000);
  });
}

// Chain: wait for DOM to be fully rendered, then wait for everything else
waitForFooter().then(() => {
  // Footer exists = all sections rendered. Now wait for assets.
  return Promise.all([
    preloadSiteImages(),
    waitForDomImages(),
    waitForFonts(),
    // Small extra buffer for paint/layout
    new Promise((r) => window.setTimeout(r, 300)),
  ]);
}).then(() => {
  hideLoader();
});
