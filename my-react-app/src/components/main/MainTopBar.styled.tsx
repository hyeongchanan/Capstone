import styled from "styled-components";
import { colors } from "../../style/themes";

export const NavBar = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
    padding: 8px 32px;
    top: 0;
    width: 100%;
    max-width: 1280px;
    z-index: 10;
    background: rgb(34 132 229);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`

export const MainTopBarSection =styled.div`
    position: relative;
    z-index: 10;
    height: 320px;
    width: 100vw;
    background-color: rgb(34 132 229);
    top: 0;
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
  color: white;
  font-weight: 900;
  caret-color: transparent;
`

export const IconImg = styled.img`
  width :24px;
  height :24px;
`

export const SearchInput = styled.input`
    width: 60vw;
    height: 50px;
    padding: 10px;
    margin-Bottom: 10px;
    
`
export const SearchDiv = styled.div`
    padding-top: 20px;
    color: white;
`

export const TextBig = styled.p`
    color: white;
    font-size: 40px;
    font-weight: 800;
    margin: 0;
`

export const TextSmall = styled.p`
    color: white;
    font-size: 12px;
    font-weight: 200;
    margin: 0 0 10px 0;
`