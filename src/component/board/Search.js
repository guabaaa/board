import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import '../../css/header.css'
import SearchDetail from '../../page/SearchDetail';



const Search = () => {


    return (
        <div>
            <div className='search-wrap'>
                <div className={'search-box'}>
                    <input
                        className={'search-bar'}
                        type={'text'}
                        placeholder='검색어를 입력하세요'
                    />
                    <BiSearchAlt className='search-icon' width={30} height={30} type={'submit'}
                    />
                </div>
            </div>
        </div>

    )
}

export default Search
