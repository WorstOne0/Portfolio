// React
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGraduationCap,
  FaRegCalendar,
} from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { GiComputing } from "react-icons/gi";
// Components
import { Layout, AnimatedLetters } from "../../../components";
// Styles
import * as S from "./styles";

const About = () => {
  return (
    <S.Container>
      <S.BackgroundText>C++ Python</S.BackgroundText>
      <S.Wrapper>
        <Layout tagName="section" first={true} full={true}>
          <S.Wrapper auto={true} column={true}>
            <S.Content>
              <Layout tagName="h2">
                <S.Title>
                  <SiCplusplus style={{ marginRight: 15, color: "#00599c" }} />
                  <AnimatedLetters string={"C/C++"} delay={0} timer={500} />
                  <FaPython style={{ marginRight: 15, color: "#FFE873" }} />
                  <AnimatedLetters string={"Python"} delay={0} timer={500} />
                </S.Title>
              </Layout>
              <Layout tagName="p">
                <S.Text>Text</S.Text>
              </Layout>
            </S.Content>
            <S.Side>
              <S.SideWrapper></S.SideWrapper>
            </S.Side>
          </S.Wrapper>
        </Layout>
      </S.Wrapper>
    </S.Container>
  );
};

export default About;
