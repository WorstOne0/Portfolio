import React from "react";

import { Home, About, Contact } from "../index";
import { NavBar } from "../../components";

import * as S from "./styles";

const Landing = () => {
  return (
    <S.Limits>
      <NavBar />
      <S.Container>
        <Home />
        <About />
        <Contact />
      </S.Container>
    </S.Limits>
  );
};

export default Landing;
