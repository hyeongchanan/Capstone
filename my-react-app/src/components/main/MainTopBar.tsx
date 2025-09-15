import React, { useState } from 'react'
import searchIcon from '/img/search_w.svg'
import userIcon from '/img/user_w.svg'
import menuIcon from '/img/menu_w.svg'
import heartIcon from '/img/heart_w.svg'
import { HeaderMenu, IconImg, LeftAlignBox, MainTopBarSection, NavBar, NavBarInsideSection, NavBarInsideSectionL, NavBarInsideSectionR, SearchDiv, SearchImg, SearchImgDiv, SearchInput, SearchInputSection, TextBig, TextSmall, Title } from './MainTopBar.styled'
import { useNavigate } from 'react-router-dom'
import { BasicBase, LeftAlign, Spacer } from '../../style/common.styled'

const MainTopBar = () => {

    const navigate = useNavigate();
    const [keyWord, setKeyWord] = useState('');
    const handleSearch = () => {
        navigate(`/static/SearchPage/${keyWord}`);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch()
    }


    return (
        <MainTopBarSection>
            <BasicBase>
                <NavBar>
                    <NavBarInsideSectionL>
                        <Title onClick={() => navigate('/static/')}>L.B</Title>
                    </NavBarInsideSectionL>

                    <NavBarInsideSectionR>
                        <HeaderMenu 
                            onClick={() => navigate('/static/SearchPage')}
                            >
                            <IconImg src={searchIcon} alt="search" />
                        </HeaderMenu>
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
                            <SearchImgDiv>
                                <SearchImg onClick={handleSearch} src={searchIcon} alt="search" />
                            </SearchImgDiv>
                        </LeftAlign>
                    </SearchDiv>
                </LeftAlignBox>
            </BasicBase>
        </MainTopBarSection>

    )
}

export default MainTopBar