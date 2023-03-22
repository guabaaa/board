import React from 'react'
import '../../css/postdetail.css'

const CardDetail = ({ item }) => {
    return (
        <div className='detail-line'>
            <div className='detail-img-line'>
                <img alt='고객사 이미지' width={400} height={300} src={item?.img} />
            </div>
            <h2 className='detail-title'>고객사 : {item?.title}</h2>
            <div className='detail-content'>
                <p className='detail-join-date'>가입날짜 : {item?.date}</p>
                <p className='detail-join-content'>가입내용 : {item?.content}</p>
            </div>
        </div>
    )
}

export default CardDetail
