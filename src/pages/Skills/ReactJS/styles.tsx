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

export const SkillContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin: 1.5rem 0;

  display: flex;
  flex-direction: column;
`;

export const SkillText = styled.h2`
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;

  color: ${(props) => props.color};
  font-size: 1.6rem;

  .Icon {
    margin-right: 0.5rem;

    font-size: 1.8rem;
  }
`;

export const SkillBarContainer = styled.div`
  height: 0.3rem;
  width: 100%;
  background: #4d4d4d;

  position: relative;
`;

export const SkillBar = styled(motion.div)<SkillBarProps>`
  height: 0.3rem;
  width: ${(props) => props.width};
  background: ${(props) => props.background};

  position: absolute;
  top: 0;
`;

export const AcademicLimits = styled.div`
  width: 100%;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
`;

export const AcademicContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  background: var(--color-dark);

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const Stripe = styled.div`
  height: 0.3rem;
  width: 100%;
  background: var(--color-primary);

  position: absolute;
  top: 0;
`;

export const AcademicTitle = styled.h3`
  width: 100%;
  margin: 2rem 0 2rem 2rem;

  display: flex;
  align-items: center;

  font-size: 3.4rem;

  .Icon {
    margin-right: 1.5rem;
  }
`;

export const AcademicSubTitle = styled.p`
  margin: 0 2rem 0 2rem;
  font-size: 2.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    display: flex;
    align-items: center;
  }

  .Icon {
    margin-right: 0.5rem;

    font-size: 2rem;
  }
`;

export const AcademicCollege = styled.p`
  margin: 0 2rem 2rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #929292;
  font-size: 1.6rem;
`;

export const AcademicYear = styled.p`
  color: #929292;
  font-size: 1.6rem;
`;

export const Bold = styled.span`
  color: var(--color-primary);
  font-weight: bold;
`;
