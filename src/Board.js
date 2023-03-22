import React from 'react'
import Header from './component/navigation/Header'
import MultiSelect from './component/board/MultiSelect'
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