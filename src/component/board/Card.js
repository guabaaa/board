import React from 'react'
import '../../css/card.css'
import { useNavigate } from "react-router-dom"


const Card = ({ item }) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/post/${item.id}`)
    }
    return (
        <div className='card-line' onClick={showDetail}>
            <div className='img-line'>
                <img alt='고객사 이미지' width={330} height={200} src={item?.img} />
            </div>
            <h3 className='card-title'>고객사 : {item?.title}</h3>
            <div className='card-content'>
                <p className='join-date'>가입날짜 : {item?.date}</p>
                <p className='join-content'>가입내용 : {item?.content} </p>
                <p className='resign' style={{ color: item?.resign === false ? 'red' : 'blue' }}>{item?.resign === true ? "진행 완료" : "진행 중"}</p>
            </div>
        </div>
    )
}

export default Card
