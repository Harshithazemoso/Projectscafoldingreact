// import ReactDOM from "react-dom";
// import { App } from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
import React from "react";

import { App } from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
