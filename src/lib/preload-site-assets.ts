import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpg";
import aboutBrahma from "@/assets/about-brahma.jpg";
import blueColumbianImg from "@/assets/blue-columbian-brahma.jpg";
import bsoBrahmaImg from "@/assets/bso-brahma.jpg";
import lightColumbianImg from "@/assets/light-columbian-brahma.jpg";
import darkBrahmaImg from "@/assets/dark-brahma.jpg";
import isabelBrahmaImg from "@/assets/isabel-brahma.jpg";
import isabelBrahmaEggsImg from "@/assets/isabel-brahma-eggs.jpg";
import lightColumbianChicksImg from "@/assets/light-columbian-chicks.jpg";
import salmonBrahmaChicksImg from "@/assets/salmon-brahma-chicks.jpg";
import isabelChicks2weekImg from "@/assets/isabel-chicks-2week.jpg";
import lightColumbianChicks2weekImg from "@/assets/light-columbian-chicks-2week.jpg";
import salmonBrahmaChicks2weekImg from "@/assets/salmon-brahma-chicks-2week.jpg";
import isabelChicks1weekImg from "@/assets/isabel-chicks-1week.jpg";

const siteImageUrls = Array.from(
  new Set([
    heroBg,
    logo,
    aboutBrahma,
    blueColumbianImg,
    bsoBrahmaImg,
    lightColumbianImg,
    darkBrahmaImg,
    isabelBrahmaImg,
    isabelBrahmaEggsImg,
    lightColumbianChicksImg,
    salmonBrahmaChicksImg,
    isabelChicks2weekImg,
    lightColumbianChicks2weekImg,
    salmonBrahmaChicks2weekImg,
    isabelChicks1weekImg,
  ])
);

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();

    const finish = () => {
      if (typeof img.decode === "function") {
        img.decode().catch(() => undefined).finally(() => resolve());
        return;
      }
      resolve();
    };

    img.decoding = "async";
    img.onload = finish;
    img.onerror = () => resolve();
    img.src = src;

    if (img.complete && img.naturalWidth > 0) {
      finish();
    }
  });

export const preloadSiteImages = async () => {
  await Promise.all(siteImageUrls.map(preloadImage));
};
