import { defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    position: ["absolute", "fixed", "static", "sticky", "relative"],
    display: ["none", "flex"],
    flexDirection: ["row", "column"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    justifyContent: ["stretch", "flex-start", "center", "flex-end"],
    gap: vars.em,
    paddingTop: vars.em,
    paddingBottom: vars.em,
    paddingLeft: vars.em,
    paddingRight: vars.em,
    marginTop: vars.em,
    marginBottom: vars.em,
    marginLeft: vars.em,
    marginRight: vars.em,
    width: vars.width,
    height: vars.height,
    borderRadius: vars.px,
    fontFamily: vars.fontFamily,
    fontSize: vars.em,
    lineHeight: vars.px,
    textAlign: ["left", "right", "center"],
    top: { ...vars.em, ...vars.px },
    bottom: { ...vars.em, ...vars.px },
    left: { ...vars.em, ...vars.px },
    right: { ...vars.em, ...vars.px },
  },
  shorthands: {
    // padding相关的快捷写法
    pa: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    ma: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    ml: ["marginLeft"],
    mr: ["marginRight"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    textSize: ["fontSize", "lineHeight"],
    inset: ["top", "left", "right", "bottom"],
  },
});

export default responsiveProperties;
