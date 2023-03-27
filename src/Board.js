import React from 'react'
import Header from './page/Header'
import PostAll from './page/PostAll'
import { Routes, Route } from "react-router-dom"
import PostDetail from './page/PostDetail'
import Registration from './page/Registration'
import SearchDetail from './page/SearchDetail'
import FalseSearch from './page/FalseSearch'

const Board = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<PostAll />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path='/regi' element={<Registration />} />
                <Route path='/search' element={<SearchDetail />} />
                <Route path='/falsesearch' element={<FalseSearch />} />
            </Routes>
        </div>
    )
}

export default Board