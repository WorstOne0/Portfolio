// React
import { FaLinkedin, FaGithub, FaSteam } from "react-icons/fa";
// Components
import { Layout, AnimatedLetters, MyParticles } from "../../components";
// Styles
import * as S from "./styles";
import { link } from "fs";

const Home = () => {
  return (
    <S.Container>
      <MyParticles />
      <S.Wrapper>
        <Layout tagName="html" first={true} full={true}>
          <Layout tagName="body" full={true}>
            <S.Content>
              <Layout tagName="h2">
                <S.Title>
                  <AnimatedLetters string={"Hi,"} delay={0.1} /> <br />
                  <AnimatedLetters string={"I'm "} delay={0.4} />
                  <AnimatedLetters string={"Lucca,"} delay={0.8} /> <br />
                  <AnimatedLetters string={"Software Developer"} delay={1.5} />
                </S.Title>
              </Layout>
              <Layout tagName="p">
                <S.SubTitle>
                  Computer <span>Enginieer</span> - Full-Stack{" "}
                  <span>Developer</span>
                </S.SubTitle>
              </Layout>
            </S.Content>
          </Layout>
        </Layout>

        <S.SocialContainer>
          <S.SocialButton
            href="https://www.linkedin.com/in/lucca-gabriel-410040154/"
            target="_blank"
          >
            <FaLinkedin className="Icon Linkedin" />
            <p>LinkedIn</p>
          </S.SocialButton>
          <S.SocialButton href="https://github.com/WorstOne0" target="_blank">
            <FaGithub className="Icon" />
            <p>Github</p>
          </S.SocialButton>
          <S.SocialButton
            href="https://steamcommunity.com/id/worstone0/"
            target="_blank"
          >
            <FaSteam className="Icon Steam" />
            <p>Steam</p>
          </S.SocialButton>
        </S.SocialContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
