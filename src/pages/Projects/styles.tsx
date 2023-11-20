import styled from "styled-components";

// Interface
interface WrapperProps {
  auto?: boolean;
  column?: boolean;
}

export const Container = styled.div`
  width: 100%;
  background: var(--color-background-dark);

  position: relative;
  overflow: hidden;

  color: #fff;
`;

export const Wrapper = styled.div<WrapperProps>`
  height: ${(props) => (props.auto ? "100%" : "100vh")};
  width: 100%;
  padding: 2rem 0;

  display: flex;
  flex-direction: ${(props) => (props.column ? "row" : "column")};
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: var(--color-primary);
  font-size: 8rem;

  animation: fadeIn 0.5s 0.3s ease-in backwards;
`;
