import styled from "styled-components";

export const Container = styled.div`
  height: 15rem;
  width: 50rem;
  background: var(--color-dark);

  position: relative;

  box-shadow: 0 0 1rem 0px black;
`;

export const Stripe = styled.div`
  height: 0.3rem;
  width: 100%;
  background: ${(props) => props.color};

  position: absolute;
  top: 0;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 3rem;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  padding: 1rem 0;

  color: #fff;
  font-size: 2.8rem;
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.color};
  font-size: 1.6rem;
`;
