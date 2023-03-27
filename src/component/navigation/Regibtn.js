import React from 'react'
import { useNavigate } from 'react-router-dom';

const Regibtn = () => {

    const navigate = useNavigate();
    const showRegi = () => {
        navigate(`/regi`)
    }
    return (
        <div>
            <div className='post-regi-wrap'>
                <button className='post-regi-btn' onClick={showRegi}>등록하기</button>
            </div>
        </div>
    )
}

export default Regibtn
