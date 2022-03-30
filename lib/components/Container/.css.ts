import { style, styleVariants } from "@vanilla-extract/css";

const base = style({ padding: 12 });

export const position = styleVariants(
  {
    relative: "relative",
    absolute: "absolute",
    sticky: "sticky",
    static: "static",
  },
  (v, k) => [base, { position: k }]
);

export const height = styleVariants(
  {
    fullHeight: "100%",
    fullScreen: "100vh",
  },
  (v, k) => [base, { height: v }]
);
