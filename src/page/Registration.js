import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/registration.css'

const Registration = () => {

    const navigate = useNavigate();
    const postRegi = () => {
        navigate('/')
    }
    return (
        <div className='regi-wrap'>
            <div className='regi-content'>
                <span>고객사 : </span>
                <input type='text' placeholder='고객사를 입력해주세요' />
            </div>
            <div className='regi-content'>
                <span>일정 날짜 : </span>
                <input type='date' />
            </div>
            <div className='regi-content'>
                <span>일정 내용 : </span>
                <select>
                    <option>경영/재무관리</option>
                    <option>CCTV 관제센터</option>
                    <option>Smart City</option>
                    <option>시정상황판</option>
                    <option>교통/환경</option>
                    <option>통계/분석관리</option>
                    <option>재난/안전</option>
                    <option>관리지표분석</option>
                </select>
            </div>
            <div className='regi-content'>
                <span>진행 상황 : </span>
                <select>
                    <option>진행 중</option>
                    <option>진행 완료</option>
                </select>
            </div>
            <div className='regi-btn-wrap'>
                <button className='regi-btn' onClick={postRegi}>등록</button>
            </div>

        </div>
    )
}

export default Registration
