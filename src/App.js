import React, { StrictMode } from "react";
import {render} from "react-dom";
import SearcParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details  from "./Details";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
       <h1>Adopt Me!</h1>
       <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearcParams />} />
       </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

render(<App />, document.getElementById("root"));
