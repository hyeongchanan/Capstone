import styled from "styled-components";
import { colors } from "../style/themes";

export const NavBar = styled.nav`
    position: absolute;
    z-Index: 1;
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
    padding: 1px 32px;
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 1280px;
    background: ${colors.secondary};
    /*box-shadow: 0 0 5px 5px ${colors.secondary}*/;
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

export const HeaderMenu = styled.div`
    font-size: 12px;
    display: inline-block;
    margin-left: 2.7em;
`
export const Title = styled.p`
  font-size: 24px;
  color: ${colors.primary};
  font-weight: 900;
  caret-color: transparent;
`

export const IconImg = styled.img`
  width :24px;
  height :24px;
`