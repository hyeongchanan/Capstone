import React, { useEffect, useRef, useState } from 'react';
import {
  MainTopBarSection,
  NavBar,
  NavBarInsideSectionL,
  NavBarInsideSectionR,
  HeaderMenu,
  Title,
  IconImg,
  LeftAlignBox,
  SearchDiv,
  TextBig,
  TextSmall,
  LeftAlign,
  SearchInput,
  SearchImgDiv,
  SearchImg,
} from './MainTopBar.styled';
import { BasicBase } from '../../style/common.styled';
import searchIcon from '/img/search_w.svg';
import userIcon from '/img/user_w.svg';
import menuIcon from '/img/menu_w.svg';
import heartIcon from '/img/heart_w.svg';
import { useNavigate } from 'react-router-dom';

const MainTopBar = () => {
  const navigate = useNavigate();
  const [keyWord, setKeyWord] = useState('');
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const pos = useRef({ x: 48, y: 0 });      // 현재 위치
  const target = useRef({ x: 48, y: 0 });   // 목표 위치

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = 40 + (e.clientX / innerWidth) * 20; // 40% ~ 60%
      const y = (e.clientY / innerHeight) * 10;     // 0% ~ 10%
      target.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let frame: number;
    const animate = () => {
      // lerp 보간
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;

      if (sectionRef.current) {
        sectionRef.current.style.clipPath =
          `ellipse(100% 80% at ${pos.current.x}% ${pos.current.y}%)`;
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSearch = () => {
    navigate(`/static/SearchPage/${keyWord}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <MainTopBarSection ref={sectionRef}>
      <BasicBase>
        <NavBar>
          <NavBarInsideSectionL>
            <Title onClick={() => navigate('/static/')}>L.B</Title>
          </NavBarInsideSectionL>

          <NavBarInsideSectionR>
            <HeaderMenu onClick={() => navigate('/static/')}>
              <IconImg src={heartIcon} alt="heart" />
            </HeaderMenu>
            <HeaderMenu onClick={() => navigate('/static/My')}>
              <IconImg src={userIcon} alt="my" />
            </HeaderMenu>
            <HeaderMenu onClick={() => navigate('/static/')}>
              <IconImg src={menuIcon} alt="menu" />
            </HeaderMenu>
          </NavBarInsideSectionR>
        </NavBar>

        <LeftAlignBox>
          <SearchDiv>
            <TextBig>블루레이 추천</TextBig>
            <TextSmall>당신의 인생영화를 찾아보세요!</TextSmall>
            <LeftAlign>
              <SearchInput
                value={keyWord}
                onChange={(e) => setKeyWord(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="상품명 검색"
              />
              <SearchImgDiv onClick={handleSearch}>
                <SearchImg src={searchIcon} alt="search" />
              </SearchImgDiv>
            </LeftAlign>
          </SearchDiv>
        </LeftAlignBox>
      </BasicBase>
    </MainTopBarSection>
  );
};

export default MainTopBar;
