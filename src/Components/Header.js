import React from "react";
import Logo from "../images/logo-ods.png"
import * as S from "../styles/HeaderStyled"

const Header = () => {
  return(
      <S.containerHeader>
            <S.Logo src={Logo} alt=""/>
            <h1>Rio de Janeiro</h1>
      </S.containerHeader>
  )
}

export default Header