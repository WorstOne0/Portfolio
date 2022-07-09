import React from "react";

import { Layout, AnimatedLetters } from "../../components";

import * as S from "./styles";

import { FaReact, FaPython, FaNodeJs, FaGraduationCap } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { GiComputing } from "react-icons/gi";

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
                  Eu sou um Estudante de Engenharia da Computação na UTFPR -
                  Universidade Tecnológica Federal do Paraná. Sou um
                  desenvolvedor <S.Bold>Full-Stack</S.Bold> autodidata, tenho
                  experiência na criação de aplicações frontend com
                  <S.Bold> ReactJS</S.Bold> e backend utilizizando
                  <S.Bold> NodeJS/GraphQL</S.Bold>, tenho conhecimentos em
                  <S.Bold> C/C++</S.Bold> e estou aprimorando minhas habilidades
                  em <S.Bold> Python</S.Bold> e <S.Bold> Flutter</S.Bold>.
                </S.Text>
              </Layout>
            </S.Content>
            <S.Side>
              <S.SideWrapper>
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
              </S.SideWrapper>
              <S.SideWrapper>
                <S.AcademicLimits>
                  <S.AcademicContainer>
                    <S.Stripe />
                    <S.AcademicTitle>
                      <FaGraduationCap className="Icon" />
                      Formação Acadêmica
                    </S.AcademicTitle>
                    <S.AcademicSubTitle>
                      <p>
                        <GiComputing className="Icon" />
                        Engenharia da Computação
                      </p>
                      <S.AcademicYear>
                        Fevereiro de 2016 - Cursando
                      </S.AcademicYear>
                    </S.AcademicSubTitle>
                    <S.AcademicCollege>
                      <p>Universidade Tecnológica Federal do Paraná - UTFPR</p>
                      <p>Bacharelado</p>
                    </S.AcademicCollege>
                  </S.AcademicContainer>
                </S.AcademicLimits>
              </S.SideWrapper>
            </S.Side>
          </S.Wrapper>
        </Layout>
      </S.Wrapper>
    </S.Container>
  );
};

export default About;
