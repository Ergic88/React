import React from "react";
import {render} from "react-dom";
import SearcParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearcParams />
    </div>
  )
}

render(<App />, document.getElementById("root"));
