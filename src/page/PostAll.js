import { async } from 'q';
import React, { useEffect, useState } from 'react'
import Card from '../component/board/Card';

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
        <div className='card-wrap'>
            {PostList.map((menu) => (
                <Card item={menu} />
            ))}
        </div>
    )
}

export default PostAll
