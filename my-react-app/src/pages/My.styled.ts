import styled from "styled-components";


export const Header = styled.header`
  padding: 16px 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NavLink = styled.a`
  color: #0366d6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Section = styled.section`
  margin: 24px 0;
`;

export const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px dashed #bbb;
  background: #fafafa;
`;

export const Button = styled.button`
  padding: 10px 14px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background: #f5f5f5;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(5, 1fr);
`;

export const Card = styled.div`
  border: 0.5px solid #bbb;
  border-radius: 8px;
  background: #ffffffff;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
`;

export const Panel = styled.div`
  border: 0.5px solid #bbb;
  border-radius: 8px;
  background: #ffffffff;
  padding: 12px;
  color: #666;
`;

export const Footer = styled.footer`
  border-top: 0.5px solid #e5e5e5;
  margin-top: 40px;
  padding-top: 24px;
  color: #666;
  text-align: center;
`;
