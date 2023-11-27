// Pages
import {
  Home,
  About,
  Contact,
  CPython,
  Flutter,
  NodeJS,
  ReactJS,
} from "../index";
// Components
import { NavBar } from "../../components";
// Styles
import * as S from "./styles";

const Landing = () => {
  return (
    <S.Limits>
      <NavBar />

      <S.Container>
        <Home />

        <About />

        <ReactJS />
        <NodeJS />
        <Flutter />
        <CPython />

        <Contact />
      </S.Container>
    </S.Limits>
  );
};

export default Landing;
