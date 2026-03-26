import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { preloadSiteImages } from "./lib/preload-site-assets";

createRoot(document.getElementById("root")!).render(<App />);

const MIN_DISPLAY_MS = 2000;
const MAX_WAIT_MS = 25000;
const startTime = Date.now();
let loaderHidden = false;

function fadeOutLoader() {
  const loader = document.getElementById("app-loader");
  if (!loader) return;
  loader.style.transition = "opacity 0.8s ease, visibility 0.8s ease";
  loader.style.opacity = "0";
  loader.style.visibility = "hidden";
  window.setTimeout(() => loader.remove(), 800);
}

function hideLoader() {
  if (loaderHidden) return;
  loaderHidden = true;

  const elapsed = Date.now() - startTime;
  const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
  window.setTimeout(fadeOutLoader, remaining);
}

function waitForWindowLoad(): Promise<void> {
  if (document.readyState === "complete") {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

function waitForFooter(): Promise<void> {
  return new Promise((resolve) => {
    if (document.querySelector("footer")) {
      resolve();
      return;
    }

    const root = document.getElementById("root");
    if (!root) {
      resolve();
      return;
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector("footer")) {
        observer.disconnect();
        resolve();
      }
    });

    observer.observe(root, { childList: true, subtree: true });
    window.setTimeout(() => {
      observer.disconnect();
      resolve();
    }, 12000);
  });
}

function waitForFonts(): Promise<void> {
  if (document.fonts?.ready) {
    return document.fonts.ready.then(() => undefined);
  }
  return Promise.resolve();
}

function waitForDomImages(): Promise<void> {
  const images = Array.from(document.querySelectorAll("img"));

  return Promise.all(
    images.map((img) => {
      if (img.complete && img.naturalWidth > 0) {
        if (typeof img.decode === "function") {
          return img.decode().catch(() => undefined).then(() => undefined);
        }
        return Promise.resolve();
      }

      return new Promise<void>((resolve) => {
        const done = () => {
          if (typeof img.decode === "function") {
            img.decode().catch(() => undefined).finally(() => resolve());
            return;
          }
          resolve();
        };

        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", () => resolve(), { once: true });
        window.setTimeout(() => resolve(), 12000);
      });
    })
  ).then(() => undefined);
}

function waitForFinalPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.setTimeout(resolve, 250);
      });
    });
  });
}

window.setTimeout(hideLoader, MAX_WAIT_MS);

(async () => {
  try {
    await waitForFooter();
    await waitForWindowLoad();
    await preloadSiteImages();
    await waitForDomImages();
    await waitForFonts();
    await waitForFinalPaint();
    hideLoader();
  } catch {
    hideLoader();
  }
})();
