import React, { useState } from 'react'
import searchIcon from '/img/search_w.svg'
import userIcon from '/img/user_w.svg'
import menuIcon from '/img/menu_w.svg'
import heartIcon from '/img/heart_w.svg'
import { HeaderMenu, IconImg, LeftAlignBox, MainTopBarSection, NavBar, NavBarInsideSection,NavBarInsideSectionL, NavBarInsideSectionR, SearchDiv, SearchImg, SearchImgDiv, SearchInput, SearchInputSection, TextBig, TextSmall, Title } from './MainTopBar.styled'
import { useNavigate } from 'react-router-dom'
import { BasicBase, LeftAlign, Spacer } from '../../style/common.styled'

const MainTopBar = () => {

    const navigate = useNavigate();
    const [keyWord, setKeyWord] = useState('');
    const handleSearch = () => {
        navigate(`/static/SearchPage/${keyWord}`);
    };


    return (
        <MainTopBarSection>
            <BasicBase>
                <NavBar>
                    <NavBarInsideSectionL >
                        <div >
                            <Title onClick={() => navigate('/static/')}>L.B</Title>
                        </div>
                        
                    </NavBarInsideSectionL>
                    <NavBarInsideSectionR>
                        <div >
                            <HeaderMenu onClick={() => navigate('/static/SearchPage')}>
                                <IconImg src={searchIcon}  alt="search" />
                            </HeaderMenu>
                            <HeaderMenu onClick={() => navigate('/static/')}>
                                <IconImg src={heartIcon}  alt="heart" />
                            </HeaderMenu>
                            <HeaderMenu onClick={() => navigate('/static/My')} >
                                <IconImg src={userIcon}  alt="my" />
                            </HeaderMenu>
                            <HeaderMenu onClick={() => navigate('/static/')}>
                                <IconImg src={menuIcon} alt="햄버거바" />
                            </HeaderMenu>
                        </div>
                    </NavBarInsideSectionR>
                </NavBar>
                <Spacer h={10}/>
                <LeftAlignBox>
                    <SearchDiv>
                        <TextBig> 블루레이 추천 </TextBig>
                        <TextSmall> 당신의 인생영화를 찾아보세요! </TextSmall>
                        <LeftAlign>
                            <SearchInput value={keyWord} onChange={(e) => setKeyWord(e.target.value)} placeholder="상품명"> 
                            </SearchInput>
                            <SearchImgDiv>
                                <SearchImg onClick={handleSearch} src={searchIcon}  alt="search" />
                            </SearchImgDiv>  
                        </LeftAlign>
                    </SearchDiv>
                </LeftAlignBox>
            </BasicBase>
        </MainTopBarSection>
    )
}

export default MainTopBar