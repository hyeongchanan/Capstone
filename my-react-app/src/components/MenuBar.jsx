import React from 'react'
import searchIcon from '/img/search.svg'
import hambuerBarIcon from '/img/menu.svg'
import userIcon from '/img/user.svg'
import shoppingBagIcon from '/img/shopping-bag.svg'
import { HeaderMenu, NavBar, NavBarInsideSection,NavBarInsideSectionL, NavBarInsideSectionR, Title } from './MenuBar.styled'
import { BasicBase } from '../style/common.styled'

const MenuBar = () => {
    return (
        <BasicBase>
            <NavBar>
                <NavBarInsideSectionL >
                    <div >
                        <a href="https://kinsta.com/wordpress-hosting/agencies/?utm_source=cssdesignawards&amp;utm_medium=Referral&amp;utm_campaign=homepage" target="_blank" rel="nofollow">
                            <Title>L.B</Title>
                        </a>
                    </div>
                    
                </NavBarInsideSectionL>
                <NavBarInsideSectionR>
                    <div >
                        <HeaderMenu href="#" data-modal-open="header-main-menu">
                            <img src={hambuerBarIcon} width="16" height="16" alt="햄버거바" />
                        </HeaderMenu>
                        <HeaderMenu href="#" data-modal-open="header-search">
                            <img src={searchIcon} width="16" height="16" alt="search" />
                        </HeaderMenu>
                        <HeaderMenu href="/submit">
                            <img src={shoppingBagIcon} width="16" height="16" alt="shoppingBag" />
                        </HeaderMenu>
                        <HeaderMenu href="/" >
                        <img src={userIcon} width="16" height="16" alt="my" />
                        </HeaderMenu>
                    </div>
                </NavBarInsideSectionR>
            </NavBar>
        </BasicBase>
    )
}

export default MenuBar