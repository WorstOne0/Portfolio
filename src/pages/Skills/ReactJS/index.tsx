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
import { Layout, AnimatedLetters, Card } from "../../../components";
// Styles
import * as S from "./styles";

const ReactJS = () => {
  return (
    <S.Container>
      <S.BackgroundText>React JS</S.BackgroundText>
      <S.Wrapper>
        <Layout tagName="section" first={true} full={true}>
          <S.Wrapper auto={true} column={true}>
            <S.Content>
              <Layout tagName="h2">
                <S.Title>
                  <FaReact style={{ marginRight: 15, color: "#61dafb" }} />
                  <AnimatedLetters string={"React JS"} delay={0} timer={500} />
                </S.Title>
              </Layout>
              <Layout tagName="p">
                <S.Text>Text</S.Text>
              </Layout>
            </S.Content>
            <S.Side>
              <S.SideWrapper>
                <Card
                  title={"WeebOverflow-frontend"}
                  subtitle={"NodeJS"}
                  color={"#61dafb"}
                />
              </S.SideWrapper>
            </S.Side>
          </S.Wrapper>
        </Layout>
      </S.Wrapper>
    </S.Container>
  );
};

export default ReactJS;
