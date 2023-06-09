import React from 'react'
import Header from './page/Header'
import PostAll from './page/PostAll'
import { Routes, Route, Link } from "react-router-dom"
import PostDetail from './page/PostDetail'
import Registration from './page/Registration'
import FalseSearch from './page/FalseSearch'
import SearchDetail from './page/SearchDetail'

const Board = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<PostAll />} >
                    <Route path=':q' element={<SearchDetail />} />
                </Route>
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path='/regi' element={<Registration />} />
                <Route path='/falsesearch' element={<FalseSearch />} />
            </Routes>
        </div>
    )
}

export default Board