import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 12rem;
  background: var(--color-dark);

  display: flex;
  flex-direction: column;

  position: sticky;
  top: 0;
`;

export const LogoContainer = styled.div`
  height: 20%;
  width: 100%;

  position: absolute;
  top: 0;
`;

export const IconContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Icon = styled.div`
  width: 100%;
  padding: 1.5rem 0;

  display: flex;
  align-items: center;
  flex-direction: column;

  color: #f4f4f4;
  font-size: 3rem;

  transition: all 0.2s ease-in;
  cursor: pointer;

  p {
    margin-top: 0.5rem;
    font-size: 1.4rem;
  }

  :hover {
    color: var(--color-primary);
  }
`;

export const Icons = styled.div``;
