import { ReactNode, useState } from "react";
import { darkTheme, lightTheme, themes } from "../../styles/theme.css";
import "../../styles/global.css";
type Props = { dark?: boolean; children?: ReactNode };

const App = (props: Props) => {
  const { dark, children } = props;
  return (
    <div id="app" className={!dark ? darkTheme : lightTheme}>
      {children}
    </div>
  );
};

export default App;
