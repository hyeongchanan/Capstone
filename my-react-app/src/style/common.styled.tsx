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

export const MainSection = styled.div`
    width: 100%;
    padding: 20px;
`
export const LeftAlign = styled.div`
    display: flex;
    flex-direction: row;
`


export const EmptyBox = styled.div`
    height: 100px;
    width: 10px;
`

export const Spacer = styled.div<{ h?: number; w?: number }>`
  height: ${({ h }) => (h ? `${h}px` : "0")};
  width: ${({ w }) => (w ? `${w}px` : "0")};
`;

export const NoMenuBar = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
`