// React
import { ReactNode } from "react";
// Styles
import * as S from "./styles";

// Interface
interface LayoutProps {
  tagName: string;
  first?: boolean;
  full?: boolean;
  children: ReactNode;
}

const Layout = ({
  tagName = "body",
  first = false,
  full = false,
  children,
}: LayoutProps) => {
  return (
    <S.Container first={first} full={full}>
      <S.TopTags>&lt;{tagName}&gt;</S.TopTags>
      <S.Content>{children}</S.Content>
      <S.BottomTags>&lt;/{tagName}&gt;</S.BottomTags>
    </S.Container>
  );
};

export default Layout;
