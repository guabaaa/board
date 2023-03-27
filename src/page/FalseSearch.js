import React from 'react'
import Search from '../component/board/Search'

const FalseSearch = () => {
    return (
        <div>
            <Search />
            <div className='false-wrap'>
                <h1>찾으시는 게시글이 존재하지 않습니다.</h1>
            </div>
        </div>

    )
}

export default FalseSearch
