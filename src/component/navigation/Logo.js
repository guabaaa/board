import React from 'react'
import logo from '../../img/clamos.png'
import '../../css/header.css'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate('/')
    }
    return (
        <div className='logo-wrap'>
            <img className='header-logo' src={logo} alt="CLAMOS LOGO" width={350} height={150} onClick={goToMain} />
        </div>
    )
}

export default Logo
