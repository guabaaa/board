import React from 'react'
import Header from './component/navigation/Header'
import MultiSelect from './component/board/MultiSelect'
import Card from './component/board/Card'

const Board = () => {
    return (
        <div>
            <Header />
            <MultiSelect />
            <Card />
        </div>
    )
}

export default Board