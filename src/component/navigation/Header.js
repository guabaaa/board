import React from 'react'
import logo from '../../img/clamos.png'
import { BiSearchAlt } from 'react-icons/bi'
import '../../css/header.css'

const Header = () => {
    return (
        <div className='header-wrap'>
            <div className='logo-wrap'>
                <img className='header-logo' src={logo} alt="CLAMOS LOGO" width={250} height={100} />
            </div>
            <div className='search-wrap'>
                <div className='search-box'>
                    <input className='search-bar' type='search' />
                    <BiSearchAlt className='search-icon' width={30} height={30} />
                </div>
            </div>
        </div>
    )
}

export default Header