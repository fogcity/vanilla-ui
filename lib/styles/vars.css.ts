import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";
import { modularScale } from "polished";

/**
 * css所有的px数据取值
 */
const px = {};

/**
 * css所有的em数据取值
 */
const em = {};

/**
 * css所有的百分比数据取值
 */
const percent = {};
for (let i = 1; i <= 100; i++) {
  (px as any)[i + "px"] = i + "px";
}
for (let i = 1.5; i <= 15; i += 0.5) {
  (em as any)[i + "em"] = i + "em";
}
for (let i = 1; i <= 100; i += 1) {
  (percent as any)[i + "%"] = i + "%";
}

export const themeClass = createGlobalTheme(":root", {
  width: {},
  height: {},
  percent,
  container: {
    background: "#fff",
    color: "#000",
  },
  px,
  em,
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
});
