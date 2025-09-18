import styled from "styled-components";
import { colors } from "../style/themes";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
`;

export const Grid = styled.div`
  display: flex;               /* 한 줄로 나열 */
  gap: 32px;                   /* 카드 사이 간격 */
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


export const LoginButton = styled.button`
  background: white;
  color: ${colors.mainBlue};
  font-size: 16px;
  font-weight: 600;
  padding: 8px 18px;
  border: 2px solid ${colors.mainBlue};
  border-radius: 25px 30% 24px 52%; 
  cursor: pointer;
  transition: all 0.25s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${colors.mainBlue};
    color: white;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`;



export const WhiteContainer = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;    /* 가운데 정렬 */
  gap: 16px;              /* 버튼 사이 간격 */
  justify-content: center;/* 화면 세로 가운데 */
  padding: 30px;
`;

export const ListWrapper = styled.div`
  background-color: white;
  margin-bottom: 24px;
  width: 100%;
  height: 332px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  border-radius: 3px;

  &:hover {
    height: 432px;            /* hover 시 높이 증가 */
    box-shadow: 0 4px 4px rgba(126, 126, 126, 0.18);
  }
`;