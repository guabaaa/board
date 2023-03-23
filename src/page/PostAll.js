import React, { useEffect, useState } from 'react'
import Card from '../component/board/Card';
import Search from '../component/navigation/Search';

const PostAll = () => {
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

    return (
        <div>
            <Search />
            <div className='card-wrap'>
                <div className='cardall-wrap'>
                    {PostList.map((menu) => (
                        <Card item={menu} />
                    ))}
                </div>
            </div>
        </div>


    )
}

export default PostAll
