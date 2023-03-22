import React from 'react'
import MultiSelect from './component/board/MultiSelect'
import Header from './page/Header'
import PostAll from './page/PostAll'

const Board = () => {
    return (
        <div>
            <Header />
            <MultiSelect />
            <PostAll />
        </div>
    )
}

export default Board