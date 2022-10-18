import React from "react";

import {GlobalStyle} from "../styles/HomeStyled.js";
import * as S from "../styles/HomeStyled"

import { Link } from "react-router-dom";

import imgEducaçao from "../images/imgEducaçao.png"
import imgTrabalho from "../images/imgTrabalho.png"
import imgPobreza from "../images/imgPobreza.png"
import imgSaude from "../images/imgSaude.png"

const Home = () => {
  return(
      <S.containerHome>
        <GlobalStyle/>
        <S.textSobre>
            <h2>The Sustainable Development Goals in <span> Rio de Janeiro</span></h2>
            <p>The Sustainable Development Goals are a global call to action to end poverty, protect the environment and climate, and ensure that people everywhere can enjoy peace and prosperity. These are the goals to which the United Nations is contributing so that we can achieve the 2030 Agenda in Brazil.</p>
        </S.textSobre>
        <S.imgsODS>
            <Link to="/pobreza"><S.imgOBS src={imgPobreza} alt=""/></Link>
            <Link to="/trabalho"><S.imgOBS src={imgTrabalho} alt=""/></Link>
            <Link to="saude"><S.imgOBS src={imgSaude} alt=""/></Link>
            <Link to="educaçao"><S.imgOBS src={imgEducaçao} alt=""/></Link>
        </S.imgsODS>
      </S.containerHome>
  )
}

export default Home