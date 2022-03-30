import { defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

const colorModeProperties = defineProperties({
  conditions: {
    lightMode: {
      "@media": "(prefers-color-scheme: light)",
    },
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: [vars.container.color],
    background: [vars.container.background],
  },
});

export default colorModeProperties;
