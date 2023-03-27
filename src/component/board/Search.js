import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import '../../css/header.css'



const Search = () => {
    const navigate = useNavigate();

    const search = (e) => {
        if (e.key) {
            // 입력한 검색어를 읽어와서
            let keyword = e.target.value;
            // url 을 바꿔준다.
            navigate(`/?q=${keyword}`)
            /** 검색한 키워드가 없으면 없다는 페이지 뜸 */
            if (e.key = "null") {
                navigate(`/falsesearch/?q=${keyword}`)
            }
        }

    }

    return (
        <div>
            <div className='search-wrap'>
                <div className={'search-box'}>
                    <input
                        className={'search-bar'}
                        type={'text'}
                        onKeyPress={(e) => search(e)}
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
