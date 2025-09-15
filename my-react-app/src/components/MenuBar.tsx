import React, { useState } from 'react'
import searchIcon from '/img/search.svg'
import userIcon from '/img/user.svg'
import menuIcon from '/img/menu.svg'
import heartIcon from '/img/heart.svg'
import {
    HeaderMenu, IconImg, NavBar, NavBarInsideSectionL, NavBarInsideSectionR,
    Title, SearchInput, SearchBoxWrapper
} from './MenuBar.styled'
import { BasicBase } from '../style/common.styled'
import { useNavigate } from 'react-router-dom'

const MenuBar = () => {
    const navigate = useNavigate()
    const [searchOpen, setSearchOpen] = useState(false)
    const [keyword, setKeyword] = useState('')

    const handleSearch = () => {
        if (!keyword) return
        navigate(`/static/SearchPage/${keyword}`)
        setKeyword('')
        setSearchOpen(false)
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSearch()
    }

    return (
        <BasicBase>
            <NavBar>
                <NavBarInsideSectionL>
                    <Title onClick={() => navigate('/static/')}>L.B</Title>
                </NavBarInsideSectionL>

                <NavBarInsideSectionR>
                    <SearchBoxWrapper>
                        <SearchInput
                            type="text"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                            placeholder="검색어 입력 후 Enter"
                            onKeyDown={handleKeyPress}
                            open={searchOpen} // props 전달
                        />
                        <HeaderMenu onClick={() => setSearchOpen(prev => !prev)}>
                            <IconImg src={searchIcon} alt="search" />
                        </HeaderMenu>
                    </SearchBoxWrapper>

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
        </BasicBase>
    )
}

export default MenuBar
