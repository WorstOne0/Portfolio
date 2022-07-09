import React from "react";

import { Layout, AnimatedLetters } from "../../components";

import * as S from "./styles";

const Contact = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Layout tagName="section" first={true} full={true}></Layout>
      </S.Wrapper>
    </S.Container>
  );
};

export default Contact;
