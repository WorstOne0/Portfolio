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
import { Layout, AnimatedLetters } from "../../components";
// Styles
import * as S from "./styles";

const About = () => {
  return (
    <S.Container>
      <S.BackgroundText>About Me</S.BackgroundText>
      <S.Wrapper>
        <Layout tagName="section" first={true} full={true}>
          <S.Wrapper auto={true} column={true}>
            <S.Content>
              <Layout tagName="h2">
                <S.Title>
                  <AnimatedLetters string={"Sobre mim"} delay={0} timer={500} />
                </S.Title>
              </Layout>
              <Layout tagName="p">
                <S.Text>
                  Sou <S.Bold>Engenheiro da Computação</S.Bold> formado na UTFPR
                  - Universidade Tecnológica Federal do Paraná. Como
                  desenvolvedor
                  <S.Bold> Full-Stack </S.Bold>
                  autodidata, tenho habilidades sólidas na criação de aplicações
                  frontend utilizando <S.Bold>ReactJS</S.Bold> e no
                  desenvolvimento de backend com <S.Bold>NodeJS</S.Bold>. Além
                  disso, possuo experiência na criação e publicação de
                  aplicativos mobile utilizando
                  <S.Bold> Flutter</S.Bold>, com presença nas lojas da
                  <S.Bold> Play Store</S.Bold> e <S.Bold>Apple Store</S.Bold>.
                  Meu conhecimento também abrange linguagens como
                  <S.Bold> C/C++</S.Bold>.
                </S.Text>
              </Layout>
            </S.Content>
            <S.Side>
              {/* <S.SideWrapper>
                <S.SkillContainer>
                  <S.SkillText color={"#61dafb"}>
                    <FaReact className="Icon" />
                    ReactJS
                  </S.SkillText>
                  <S.SkillBarContainer>
                    <S.SkillBar
                      width={"0%"}
                      background={"#61dafb"}
                      whileInView={{
                        width: "80%",
                        transition: { duration: 1, delay: 0.1 },
                      }}
                      viewport={{ once: true }}
                    />
                  </S.SkillBarContainer>
                </S.SkillContainer>
                <S.SkillContainer>
                  <S.SkillText color={"#68A063"}>
                    <FaNodeJs className="Icon" />
                    NodeJS
                  </S.SkillText>
                  <S.SkillBarContainer>
                    <S.SkillBar
                      width={"0%"}
                      background={"#68A063"}
                      whileInView={{
                        width: "60%",
                        transition: { duration: 1, delay: 0.3 },
                      }}
                      viewport={{ once: true }}
                    />
                  </S.SkillBarContainer>
                </S.SkillContainer>
                <S.SkillContainer>
                  <S.SkillText color={"#00599c"}>
                    <SiCplusplus className="Icon" />
                    C/C++
                  </S.SkillText>
                  <S.SkillBarContainer>
                    <S.SkillBar
                      width={"0%"}
                      background={"#00599c"}
                      whileInView={{
                        width: "80%",
                        transition: { duration: 1, delay: 0.5 },
                      }}
                      viewport={{ once: true }}
                    />
                  </S.SkillBarContainer>
                </S.SkillContainer>
                <S.SkillContainer>
                  <S.SkillText color={"#FFE873"}>
                    <FaPython className="Icon" />
                    Python
                  </S.SkillText>
                  <S.SkillBarContainer>
                    <S.SkillBar
                      width={"0%"}
                      background={"#FFE873"}
                      whileInView={{
                        width: "60%",
                        transition: { duration: 1, delay: 0.7 },
                      }}
                      viewport={{ once: true }}
                    />
                  </S.SkillBarContainer>
                </S.SkillContainer>
                <S.SkillContainer>
                  <S.SkillText color={"#027DFD"}>
                    <RiFlutterFill className="Icon" />
                    Flutter
                  </S.SkillText>
                  <S.SkillBarContainer>
                    <S.SkillBar
                      width={"0%"}
                      background={"#027DFD"}
                      whileInView={{
                        width: "40%",
                        transition: { duration: 1, delay: 0.9 },
                      }}
                      viewport={{ once: true }}
                    />
                  </S.SkillBarContainer>
                </S.SkillContainer>
              </S.SideWrapper> */}
              <S.SideWrapper>
                <S.AcademicLimits>
                  <S.AcademicContainer>
                    <S.Stripe />
                    <S.AcademicTitle>
                      <FaGraduationCap className="Icon" />
                      Formação Acadêmica
                    </S.AcademicTitle>
                    <S.AcademicSubTitle>
                      Engenharia da Computação
                      <S.AcademicYear>Bacharelado</S.AcademicYear>
                    </S.AcademicSubTitle>
                    <S.AcademicCollege>
                      <p>Universidade Tecnológica Federal do Paraná - UTFPR</p>
                      <S.AcademicYear>
                        <FaRegCalendar style={{ marginRight: 5 }} /> Fev, 2016 -
                        <FaRegCalendar style={{ margin: "0 5px" }} /> Jun, 2023
                      </S.AcademicYear>
                    </S.AcademicCollege>
                  </S.AcademicContainer>
                </S.AcademicLimits>
              </S.SideWrapper>
              <S.SideWrapper>
                <Layout tagName="div">
                  <S.Text>Hobbies - Steam - Anime - Links - Etc..</S.Text>
                </Layout>
              </S.SideWrapper>
            </S.Side>
          </S.Wrapper>
        </Layout>
      </S.Wrapper>
    </S.Container>
  );
};

export default About;
