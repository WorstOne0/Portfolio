import React from "react";

import { Layout, AnimatedLetters } from "../../components";

import * as S from "./styles";

const Projects = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Layout tagName="section" first={true} full={true}>
          <S.Wrapper auto={true}>
            <S.Content>
              <Layout tagName="h2">
                <S.Title>Projetos</S.Title>
              </Layout>
              <Layout tagName="div">Teste</Layout>
            </S.Content>
          </S.Wrapper>
        </Layout>
      </S.Wrapper>
    </S.Container>
  );
};

export default Projects;
