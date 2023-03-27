import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import '../../css/header.css'


const Search = () => {
    return (
        <div>
            <div className='search-wrap'>
                <div className='search-box'>
                    <input className='search-bar' type='text' placeholder='검색값을 입력해주세요' />
                    <BiSearchAlt className='search-icon' width={30} height={30} />
                </div>
            </div>
        </div>

    )
}

export default Search
