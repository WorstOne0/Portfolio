import styled from "styled-components";
import "animate.css";

export const Container = styled.div`
  width: 100%;
  background: var(--color-background-dark);

  scroll-snap-align: center;

  color: #fff;
  position: relative;
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding: 2rem 0;

  display: flex;

  position: relative;
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
    font-weight: bolder;
  }
`;

// Socials
export const SocialContainer = styled.div`
  width: 8rem;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 1rem;
  right: 3rem;
`;

export const SocialButton = styled.a`
  width: 100%;
  margin-top: 0.8rem;
  padding: 1.5rem 0;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  color: #f4f4f4;
  font-weight: bold;

  transition: all 0.2s ease-in;
  cursor: pointer;

  text-decoration: none;

  p {
    margin-top: 0.8rem;
    font-size: 1.6rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  .Icon {
    font-size: 2.4rem;
  }

  .Linkedin {
    color: #0e76a8;
  }

  .Steam {
    color: #2a475e;
  }
`;
