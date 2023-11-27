// React
import styled from "styled-components";
import { motion } from "framer-motion";

// Interface
interface WrapperProps {
  auto?: boolean;
  column?: boolean;
}
interface SkillBarProps {
  width: string;
  background: string;
}

export const Container = styled.div`
  width: 100%;
  background: var(--color-background-dark);

  scroll-snap-align: center;

  position: relative;
  overflow: hidden;

  color: #fff;
`;

export const BackgroundText = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;

  color: var(--color-darker);
  font-size: 30.8rem;
  font-family: "Roboto";

  opacity: 0.5;
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
  display: flex;
  align-items: center;

  color: var(--color-primary);
  font-size: 8rem;

  animation: fadeIn 0.5s 0.3s ease-in backwards;
`;

export const Text = styled.p`
  color: var(--color-white);
  font-size: 1.6rem;
`;

export const Side = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SideWrapper = styled.div`
  height: 50%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const QrCodeImg = styled.img`
  width: 30%;
`;
