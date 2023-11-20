import styled from "styled-components";

export const NavBarContainer = styled.div`
  height: 100vh;
  width: 12.5rem;
  background: var(--color-background-dark);
  padding: 0.8rem;

  position: sticky;
  top: 0;

  z-index: 1;
`;

export const NavBarMain = styled.div`
  height: 100%;
  width: 100%;
  background: var(--color-dark);
  border-radius: 0.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  position: sticky;
  top: 0;

  z-index: 1;
`;

export const IconContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 1rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Icon = styled.div`
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

  p {
    margin-top: 0.8rem;
    font-size: 1.4rem;
  }

  &:hover {
    background: var(--color-primary);
  }

  .FaIcon {
    font-size: 2rem;
  }

  .Icon {
    font-size: 2.8rem;
  }
`;

export const LanguageContainer = styled.div`
  padding: 0.8rem 1.2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 1.2rem;
`;
