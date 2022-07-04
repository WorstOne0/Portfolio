import styled from "styled-components";
import "animate.css";

export const Animate = styled.span`
  min-width: 2rem;

  display: inline-block;

  opacity: 0;
  animation: bounceIn 0.5s ease-in-out ${(props) => props.delay}s forwards;
`;

export const Animate2 = styled.span`
  min-width: 2rem;

  display: inline-block;

  :hover {
    color: var(--color-primary);
    animation: rubberBand 1s both;
  }
`;
