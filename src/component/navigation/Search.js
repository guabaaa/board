import React, { useState, useEffect } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import '../../css/header.css'
import Card from '../board/Card';

const Search = () => {
    const [PostList, setPostList] = useState([]);
    const getPosts = async () => {
        let url = "http://localhost:5000/card";
        let response = await fetch(url);
        let data = await response.json();
        setPostList(data);
    };
    useEffect(() => {
        getPosts();
    }, []);
    const searchbar = (props) => {
        const [searchValue, setSearchValue] = useState("");

        const handleInputChange = (event) => {
            setSearchValue(event.target.value)
        }
        const shouldDisplayButton = searchValue.length > 0;

        const handleInputClear = () => {
            setSearchValue("")
        }

        const filteredTitle = cards.filter((card) => {
            return card.includes(searchValue)
        })
    }
    return (
        <div>
            <div className='search-wrap'>
                <div className='search-box'>
                    <input className='search-bar' type='text' value={searchValue} onChange={handleInputChange} placeholder='검색값을 입력해주세요' />
                    <BiSearchAlt className='search-icon' width={30} height={30} onClick={handleInputClear} />
                </div>
            </div>
            <div className='card-wrap'>
                <div className='cardall-wrap'>
                    {filteredTitle.map((card) => {
                        return {
                            { card }> { card }
                    })}

                </div>
            </div>
        </div>

    )
}

export default Search
