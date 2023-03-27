import React, { useState, useEffect } from 'react'
import SearchDetail from '../../page/SearchDetail';
import Search from './Search';

const SearchBox = () => {


    return (
        <div className='searchbox-wrap'>
            <Search />
            <SearchDetail />
        </div>
    )
}

export default SearchBox