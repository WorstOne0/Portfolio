// Components
import { Layout, Card } from "../../components";
// Styles
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
              <Layout tagName="div">
                <Card
                  title={"WeebOverflow-frontend"}
                  subtitle={"Javascript"}
                  color={"#EEC643"}
                />
              </Layout>
            </S.Content>
          </S.Wrapper>
        </Layout>
      </S.Wrapper>
    </S.Container>
  );
};

export default Projects;
