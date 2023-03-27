import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../css/postdetail.css'

const CardDetail = () => {
    let { id } = useParams();
    const [postContent, setPostContent] = useState(null);
    const getPostContent = async () => {
        let url = `http://localhost:5000/card/${id}`
        let response = await fetch(url)
        let data = await response.json();
        setPostContent(data);
    }
    useEffect(() => {
        getPostContent();
    }, [])
    return (
        <div className='detail-line2'>
            <div className='detail-img-line'>
                <img alt='고객사 이미지' width={400} height={300} src={postContent?.img} />
            </div>
            <div className='detail-card-wrap'>
                <h1 className='detail-title'>고객사 : {postContent?.title}</h1>
                <div className='detail-content'>
                    <p className='detail-join-date'>일정 날짜 : {postContent?.date}</p>
                    <p className='detail-join-content'>일정 내용 : {postContent?.content}</p>
                    <p className='resign' style={{ color: postContent?.resign === false ? 'red' : 'blue' }}>{postContent?.resign === true ? "진행 완료" : "진행 중"}</p>
                </div>
            </div>

        </div>
    )
}

export default CardDetail
