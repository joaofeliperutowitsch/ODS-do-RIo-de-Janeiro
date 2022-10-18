import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";

import Header from "../Components/Header.js"
import Home from "../Components/Home.js"

import Pobreza from "../Components/Pobreza.js"
import Saude from "../Components/Saude.js"
import Trabalho from "../Components/Trabalho.js"
import Educaçao from "../Components/Educaçao.js";

const Rota = () => {
  return(
      <BrowserRouter>
        <Header />
        <Home />
        <Routes>
            <Route path="/pobreza" element={<Pobreza />}/>
            <Route path="/trabalho" element={<Trabalho />}/>
            <Route path="/saude" element={<Saude />}/>
            <Route path="/educaçao" element={<Educaçao />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default Rota