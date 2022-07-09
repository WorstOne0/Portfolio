import React from "react";

import { Home, About, Contact, Projects } from "../index";
import { NavBar } from "../../components";

import * as S from "./styles";

const Landing = () => {
  return (
    <S.Limits>
      <NavBar />
      <S.Container>
        <Home />
        <About />
        <Projects />
        <Contact />
      </S.Container>
    </S.Limits>
  );
};

export default Landing;
