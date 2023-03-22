import React from 'react'
import '../../css/card.css'

const Card = () => {
    return (
        <div className='card-wrap'>
            <div className='card-line'>
                <img alt='고객사 이미지' />
                <h3 className='card-title'>고객사 : </h3>
                <div className='card-content'>
                    <p className='join-date'>가입날짜 : </p>
                    <p className='join-content'>가입내용 :</p>
                </div>
            </div>

        </div>
    )
}

export default Card
