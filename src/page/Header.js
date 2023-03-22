import React from 'react'
import Logo from '../component/navigation/Logo'
import Search from '../component/navigation/Search'

const Header = () => {
    return (
        <div className='header-wrap'>
            <Logo />
            <Search />
        </div>
    )
}

export default Header
