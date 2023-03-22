import React from 'react'
import logo from '../../img/clamos.png'
import '../../css/header.css'

const Logo = () => {
    return (
        <div className='logo-wrap'>
            <img className='header-logo' src={logo} alt="CLAMOS LOGO" width={250} height={100} />
        </div>
    )
}

export default Logo
