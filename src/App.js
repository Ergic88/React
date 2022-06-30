import React, { StrictMode } from "react";
import {render} from "react-dom";
import SearcParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details  from "./Details";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter> 
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>      
       <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearcParams />} />
       </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

render(<App />, document.getElementById("root"));
