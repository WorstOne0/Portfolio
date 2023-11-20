// Pages
import { Home, About, Contact, Projects } from "../index";
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

        <Projects />

        <Contact />
      </S.Container>
    </S.Limits>
  );
};

export default Landing;
