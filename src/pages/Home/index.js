import React, { useState } from "react";

import { Layout, AnimatedLetters, MyParticles } from "../../components";

import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      {
        //<MyParticles />
      }
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
                  Computer Enginieer Student - <span>Full-Stack </span>
                  Developer
                </S.SubTitle>
              </Layout>
            </S.Content>
          </Layout>
        </Layout>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
