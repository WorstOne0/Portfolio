import styled from "styled-components";
import "animate.css";

export const Limits = styled.div`
  width: 100%;

  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  background: var(--color-background-dark);

  color: #fff;
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding: 2rem 0;

  display: flex;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: var(--color-white);
  font-size: 8rem;

  animation: fadeIn 0.5s 0.3s ease-in backwards;
`;

export const SubTitle = styled.p`
  color: #8d8d8d;
  font-size: 1.6rem;
  letter-spacing: 0.3rem;

  animation: fadeIn 0.5s 3s ease-in backwards;

  span {
    color: var(--color-primary);
    font-weight: bold;
  }
`;
