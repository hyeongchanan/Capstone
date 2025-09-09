import styled from "styled-components";

export const BasicBase = styled.div`
    margin: 0 auto;
    width: auto;
    display: flex;
    flex-direction: column;
    place-items: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 320px;
    max-width: 1280px;
`

export const EmptyBox = styled.div`
    height: 100px;
    width: 10px;
`

export const Spacer = styled.div<{ h?: number; w?: number }>`
  height: ${({ h }) => (h ? `${h}px` : "0")};
  width: ${({ w }) => (w ? `${w}px` : "0")};
`;