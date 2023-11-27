// React
import { RiFlutterFill } from "react-icons/ri";
// Components
import { Layout, AnimatedLetters } from "../../../components";
// Styles
import * as S from "./styles";

const Flutter = () => {
  // QrCode img
  const qrCode = require("../../../assets/qr-code.png");

  return (
    <S.Container>
      <S.BackgroundText>Flutter</S.BackgroundText>
      <S.Wrapper>
        <Layout tagName="section" first={true} full={true}>
          <S.Wrapper auto={true} column={true}>
            <S.Content>
              <Layout tagName="h2">
                <S.Title>
                  <RiFlutterFill
                    style={{ marginRight: 15, color: "#027DFD" }}
                  />
                  <AnimatedLetters string={"Flutter"} delay={0} timer={500} />
                </S.Title>
              </Layout>
              <Layout tagName="p">
                <S.Text>Text</S.Text>
              </Layout>
            </S.Content>
            <S.Side>
              <S.SideWrapper>
                <S.QrCodeImg src={qrCode} />
              </S.SideWrapper>
            </S.Side>
          </S.Wrapper>
        </Layout>
      </S.Wrapper>
    </S.Container>
  );
};

export default Flutter;
