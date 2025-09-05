import styled from "styled-components";
import { colors } from "../../style/themes";

export const CardSection = styled.div`
    min-width: 100px;
    max-width: 300px;
    width: auto;
`
export const PrdocutImgContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;   /* 넘치는 부분 잘라내기 */
    border-radius: 10px;
`

export const PrdocutImg = styled.img`
    width: 100%;
    aspect-ratio: 5 / 7; 
    object-fit: cover;  /* 비율 유지 + 잘라내서 채우기 */
    background-color: ${colors.secondary};
    display: block;    
    
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(105, 95, 15, 0.1); /* 반투명 색상 */
  pointer-events: none; /* 클릭 막힘 방지 */
`;

export const CardContent = styled.div`
    width: 100%;
    height: 200px;
`