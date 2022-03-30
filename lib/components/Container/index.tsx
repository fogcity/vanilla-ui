import { sprinkles, Sprinkles } from "../../styles/sprinkles.css";
import { Color, Margin, Padding, Position } from "../props";
import {
  positionRelative,
  positionAbsolute,
  positionFixed,
  positionSticky,
} from "../common.css";
import { position, height } from "./.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import { vars } from "../../styles/vars.css";
export type ContainerProps = Color &
  Margin &
  Padding &
  Position & {
    borderRadius?: Sprinkles["borderRadius"];
    fullHeight?: boolean;
    fullScreen?: boolean;
    // co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
  };

const Container = ({
  mt,
  mb,
  ml,
  mr,
  pb,
  pa,
  ma,
  pt,
  pl,
  pr,
  py,
  px,
  my,
  mx,
  background = "",
  color = "",
  fixed = false,
  absolute = false,
  fullHeight = false,
  relative = false,
  fullScreen = false,
  sticky = false,
  borderRadius,
  className,
  children,
}: ContainerProps & React.ComponentPropsWithoutRef<"div">) => {
  const styles = `sprinkles({
    ...(absolute && { position: "absolute" }),
    ...(relative && { position: "relative" }),
    ...(sticky && { position: "sticky" }),
    ...(fixed && { position: "fixed" }),
  }) ${className}`;

  return (
    <div
      className={sprinkles({
        ...(absolute && { position: "absolute" }),
        ...(relative && { position: "relative" }),
        ...(sticky && { position: "sticky" }),
        ...(fixed && { position: "fixed" }),
        background: vars.container.background,
      })}
      style={assignInlineVars({
        [vars.container.background]: background,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
