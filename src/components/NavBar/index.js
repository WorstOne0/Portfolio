import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

const NavBar = () => {
  return (
    <S.Container>
      <S.LogoContainer />
      <S.IconContainer>
        <S.Icon>
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </S.Icon>
        <S.Icon>
          <FontAwesomeIcon icon={faUser} />
          <p>About Me</p>
        </S.Icon>
        <S.Icon>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Contact</p>
        </S.Icon>
      </S.IconContainer>
    </S.Container>
  );
};

export default NavBar;
