import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";

import Header from "../Components/Header.js"
import Home from "../Components/Home.js"

const Rota = () => {
  return(
      <BrowserRouter>
        <Header />
        <Home />
        <Routes>
          <Route path="/pobreza" />
          <Route path="/trabalho" />
          <Route path="/saude" />
          <Route path="/educaçao" />
        </Routes>
      </BrowserRouter>
  )
}

export default Rota