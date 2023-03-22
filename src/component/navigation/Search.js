import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import logo from '../../img/clamos.png'
import '../../css/header.css'

const Search = () => {
    return (
        <div className='search-wrap'>
            <div className='search-box'>
                <input className='search-bar' type='search' />
                <BiSearchAlt className='search-icon' width={30} height={30} />
            </div>
        </div>
    )
}

export default Search
