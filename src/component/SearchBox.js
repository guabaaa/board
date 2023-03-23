import React, { useState, useEffect } from 'react'
import SearchDetail from '../page/SearchDetail';
import Search from './navigation/Search';

const SearchBox = () => {
    const [items, setItem] = useState([]);
    const [userInput, setUserInput] = useState("");
    // 데이터 요청
    useEffect(() => {
        fetch("http://localhost:5000", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                setItem(res);
            });
    }, []);
    // Search에 props로 넘겨줄 handleChange 매서드 정의
    const handleChange = (e) => {
        setUserInput(e.target.value);
    }
    const filterdCard = items.filter((item) => {
        return item.name.toLowerCase().includes(userInput.toLowerCase());
    });

    return (
        <div className='searchbox-wrap'>
            <Search handleChange={handleChange} />
            <SearchDetail key={items.id} data={filterdCard} />
        </div>
    )
}

export default SearchBox
