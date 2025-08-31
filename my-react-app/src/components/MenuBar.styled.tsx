import styled from "styled-components";
import { colors } from "../style/themes";

export const NavBar = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
    padding: 1px 20px;
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 1280px;
    z-index: 10;
    background: rgb(241, 239, 233);
    box-shadow: 0 0 5px 5px #f1efe9;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`
export const NavBarInsideSection = styled.div`
  align-items: center;           // 세로 가운데 정렬
  flex: 1;
`

export const NavBarInsideSectionL = styled.div`
  display: flex;                 // 내부 아이템들을 flex로
  align-items: center;           // 세로 가운데 정렬
  flex: 1;
  justify-content: flex-start;
`

export const NavBarInsideSectionR = styled.div`
  display: flex;                 // 내부 아이템들을 flex로
  align-items: center;           // 세로 가운데 정렬
  flex: 1;
  justify-content: flex-end;
`

export const HeaderMenu = styled.a`
    font-size: 12px;
    display: inline-block;
    margin-left: 2.7em;
`
export const Title = styled.p`
  font-size: 20px;
  color: ${colors.primary};
  font-weight: 900;
`