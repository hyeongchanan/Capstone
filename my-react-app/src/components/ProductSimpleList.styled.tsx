import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Grid = styled.div`
  display: flex;               /* 한 줄로 나열 */
  gap: 16px;                   /* 카드 사이 간격 */
  overflow-x: auto;            /* 가로 스크롤 */
  scroll-behavior: smooth;     /* 부드럽게 이동 */
  flex-direction: row; /* 기본값 */
  align-items: center;     /* 세로 가운데 */
  
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  ${(props) => (props.left ? "left: 0;" : "right: 0;")}
  width: 50px; /* 세로 전체를 덮을 너비 */
  background: rgba(255, 255, 255, 0); /* 기본 투명 */
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  z-index: 10;
  transition: background 0.2s, opacity 0.2s;
  opacity: 0; /* 기본 숨김 */

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    opacity: 1; /* hover 시 표시 */
  }
`;
export const ProductWrapper = styled.div`
  padding : 0px 5px;

`