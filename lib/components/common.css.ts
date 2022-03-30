import { sprinkles } from "../styles/sprinkles.css";
import { style } from "@vanilla-extract/css";
export const positionSticky = style([
  {
    position: "sticky",
  },
]);

export const positionRelative = style({
  position: "relative",
});

export const positionFixed = style({
  position: "fixed",
});

export const positionAbsolute = style({
  position: "absolute",
});
