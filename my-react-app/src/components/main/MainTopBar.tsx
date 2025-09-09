import React, { useState } from 'react'
import searchIcon from '/img/search.svg'
import userIcon from '/img/user.svg'
import menuIcon from '/img/menu.svg'
import heartIcon from '/img/heart.svg'
import { HeaderMenu, IconImg, MainTopBarSection, NavBar, NavBarInsideSection,NavBarInsideSectionL, NavBarInsideSectionR, SearchDiv, SearchInput, TextBig, TextSmall, Title } from './MainTopBar.styled'
import { useNavigate } from 'react-router-dom'
import { BasicBase } from '../../style/common.styled'

const MainTopBar = () => {

    const navigate = useNavigate();
    const [item, setItem] = useState('');
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
                            <HeaderMenu onClick={() => navigate('/static/LoginPage')} >
                                <IconImg src={userIcon}  alt="my" />
                            </HeaderMenu>
                            <HeaderMenu onClick={() => navigate('/static/')}>
                                <IconImg src={menuIcon} alt="햄버거바" />
                            </HeaderMenu>
                        </div>
                    </NavBarInsideSectionR>
                </NavBar>
                <SearchDiv>
                    <TextBig> 블루레이 추천 </TextBig>
                    <TextSmall> 당신의 인생영화를 찾아보세요! </TextSmall>
                    <span>
                        <SearchInput value={item} onChange={(e) => setItem(e.target.value)} placeholder="상품명"/>
                    </span>
                </SearchDiv>
            </BasicBase>
        </MainTopBarSection>
    )
}

export default MainTopBar