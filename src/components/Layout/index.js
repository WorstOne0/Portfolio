import React from "react";

import * as S from "./styles";

const Layout = ({
  tagName = "body",
  children,
  first = false,
  full = false,
}) => {
  return (
    <S.Container first={first} full={full}>
      <S.TopTags>&lt;{tagName}&gt;</S.TopTags>
      <S.Content>{children}</S.Content>
      <S.BottomTags>&lt;/{tagName}&gt;</S.BottomTags>
    </S.Container>
  );
};

export default Layout;
