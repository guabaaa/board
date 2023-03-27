import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { useSearchParams } from 'react-router-dom';
import '../../css/header.css'


const Search = ({ searchQuery, setSearchQuery, placeholder, field }) => {
    const [query] = useSearchParams();
    const [keyword, setKeyword] = useState(query.get(field) || "");
    /**Enter key 실행 시에 search event 발생 */
    const onSearch = (event) => {
        if (event.key === "Enter") {
            setSearchQuery({ ...searchQuery, page: 1, [field]: event.target.value });
        }
    };
    return (
        <div>
            <div className='search-wrap'>
                <div className='search-box'>
                    <input
                        className='search-bar'
                        type='text'
                        placeholder={placeholder}
                        onKeyPress={onSearch}
                        onChange={(event) => setKeyword(event.target.value)}
                        value={keyword} />
                    <BiSearchAlt className='search-icon' width={30} height={30} />
                </div>
            </div>
        </div>

    )
}

export default Search
