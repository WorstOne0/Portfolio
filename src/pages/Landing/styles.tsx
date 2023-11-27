import styled from "styled-components";

export const Limits = styled.div`
  width: 100%;

  display: flex;
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
  overflow-y: scroll;
  overscroll-behavior-y: contain;
  scroll-snap-type: y mandatory;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
