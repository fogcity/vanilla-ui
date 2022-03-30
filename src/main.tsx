import React, { useState } from "react";
import ReactDOM from "react-dom";
// import "../dist/style.css";
// import { App, Container } from "../dist/ui.es";
import { App, Container } from "../lib";
const Main = () => {
  const [show, setShow] = useState(1);
  const [b, setB] = useState(1);
  return (
    <App>
      <Container relative background={`rgb(255,255,${b})`}>
        22
      </Container>
      <Container relative background={`rgb(255,255,${b})`}>
        44
      </Container>
      <button onClick={() => setB((v) => v + 10)}>1111</button>
    </App>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
