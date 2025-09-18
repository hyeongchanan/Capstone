import styled from "styled-components";
import { colors } from "../style/themes";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 32px;
  background: ${colors.secondary};
`;

export const NavBarInsideSectionL = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  gap: 12px;
`;

export const NavBarInsideSectionR = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  gap: 48px;
`;

export const HeaderMenu = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 900;
  color: ${colors.primary};
  margin: 0;
  cursor: pointer;
`;

export const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;

/* 검색창 + 아이콘 래퍼 */

interface SearchInputProps {
  open: boolean;
}

export const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 16px; /* 아이콘과 검색창 사이 간격 */
`;

export const SearchInput = styled.input<SearchInputProps>`
  width: ${(props) => (props.open ? '600px' : '0')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  padding: ${(props) => (props.open ? '0 12px' : '0')};
  height: 36px;
  border-radius: 20px;
  border: ${(props) => (props.open ? 'none' : 'none')};
  outline: none;
  font-size: 16px;
  transition: all 0.3s ease;
`;


