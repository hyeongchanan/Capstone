import React from 'react'
import searchIcon from '/img/search.svg'
import userIcon from '/img/user.svg'
import menuIcon from '/img/menu.svg'
import heartIcon from '/img/heart.svg'
import { HeaderMenu, IconImg, NavBar, NavBarInsideSection,NavBarInsideSectionL, NavBarInsideSectionR, Title } from './MenuBar.styled'
import { BasicBase } from '../style/common.styled'
import { useNavigate } from 'react-router-dom'

const MenuBar = () => {

    const navigate = useNavigate();
    return (
        <BasicBase>
            <NavBar>
                <NavBarInsideSectionL >
                    <div >
                        <Title onClick={() => navigate('static/')}>L.B</Title>
                    </div>
                    
                </NavBarInsideSectionL>
                <NavBarInsideSectionR>
                    <div >
                        <HeaderMenu onClick={() => navigate('static/SearchPage')}>
                            <IconImg src={searchIcon}  alt="search" />
                        </HeaderMenu>
                        <HeaderMenu onClick={() => navigate('static/')}>
                            <IconImg src={heartIcon}  alt="heart" />
                        </HeaderMenu>
                        <HeaderMenu onClick={() => navigate('static/My')} >
                            <IconImg src={userIcon}  alt="my" />
                        </HeaderMenu>
                        <HeaderMenu onClick={() => navigate('static/')}>
                            <IconImg src={menuIcon} alt="햄버거바" />
                        </HeaderMenu>
                    </div>
                </NavBarInsideSectionR>
            </NavBar>
        </BasicBase>
    )
}

export default MenuBar