import { createSprinkles } from "@vanilla-extract/sprinkles";
import responsiveProperties from "./responsive.css";
import colorModeProperties from "./colors.css";

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorModeProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
