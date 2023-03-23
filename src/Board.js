import React from 'react'
import Header from './page/Header'
import PostAll from './page/PostAll'
import { Routes, Route } from "react-router-dom"
import PostDetail from './page/PostDetail'

const Board = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<PostAll />} />
                <Route path="/post/:id" element={<PostDetail />} />
            </Routes>
        </div>
    )
}

export default Board