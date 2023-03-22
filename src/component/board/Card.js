import React from 'react'
import '../../css/card.css'

const Card = ({ item }) => {
    return (
        <div className='card-line'>
            <div className='img-line'>
                <img alt='고객사 이미지' width={330} height={200} src={item?.img} />
            </div>
            <h3 className='card-title'>고객사 : {item?.title}</h3>
            <div className='card-content'>
                <p className='join-date'>가입날짜 : {item?.date}</p>
                <p className='join-content'>가입내용 : {item?.content} </p>
                <p className='resign'>{item?.resign == true ? "재계약" : " - "}</p>
            </div>
        </div>
    )
}

export default Card
