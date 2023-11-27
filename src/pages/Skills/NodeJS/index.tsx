// React
import { FaNodeJs } from "react-icons/fa";

// Components
import { Layout, AnimatedLetters, Card } from "../../../components";
// Styles
import * as S from "./styles";

const NodeJS = () => {
  return (
    <S.Container>
      <S.BackgroundText>Node JS</S.BackgroundText>
      <S.Wrapper>
        <Layout tagName="section" first={true} full={true}>
          <S.Wrapper auto={true} column={true}>
            <S.Content>
              <Layout tagName="h2">
                <S.Title>
                  <FaNodeJs style={{ marginRight: 15, color: "#68A063" }} />
                  <AnimatedLetters string={"Node JS"} delay={0} timer={500} />
                </S.Title>
              </Layout>
              <Layout tagName="p">
                <S.Text>Text</S.Text>
              </Layout>
            </S.Content>
            <S.Side>
              <S.SideWrapper>
                <Card
                  title={"WeebOverflow-backend"}
                  subtitle={"NodeJS"}
                  color={"#68A063"}
                />
              </S.SideWrapper>
            </S.Side>
          </S.Wrapper>
        </Layout>
      </S.Wrapper>
    </S.Container>
  );
};

export default NodeJS;
