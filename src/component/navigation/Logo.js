import React from 'react'
import logo from '../../img/clamos.png'
import '../../css/header.css'

const Logo = () => {
    return (
        <div className='logo-wrap'>
            <img className='header-logo' src={logo} alt="CLAMOS LOGO" width={350} height={150} />
        </div>
    )
}

export default Logo
