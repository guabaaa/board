import React, { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../config/Api'

import '../css/registration.css'

const Registration = () => {
    const [userData, setUserData] = useState({
        customer: "",
        title: "",
        content: "",
        resign: true
    })
    const { customer, resign, title, content } = userData;
    const navigate = useNavigate();

    /** img upload */
    const inputRef = useRef < HTMLInputElement > (null);

    const onUploadImg = useCallback((e) => {
        if (!e.target.files) {
            return;
        }
        console.log(e.target.files[0].name);
    }, []);
    const upLoadImg = useCallback(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.click();
    }, [])
    /** post 등록 */
    const submitRegi = async () => {
        try {
            await Api.insertBoard(userData);
            navigate("/");
        } catch {
            alert("등록실패!")
        }
    }
    return (
        <div className='regi-wrap'>
            <div className='regi-content'>
                <input
                    type={'file'}
                    accept="image/*"
                    style={{ display: "none" }}

                />
            </div>
            <div className='regi-content-imgwrap'>
                <div className='regi-cimg'>
                    <img src='' />
                </div>
                <button onClick={upLoadImg}>사진 올리기</button>
            </div>
            <div className='regi-content'>
                <span>고객사 : </span>
                <input type='text' placeholder='고객사를 입력해주세요' onChange={(e) => {
                    setUserData({
                        ...userData,
                        customer: e.target.value,
                        title: e.target.value
                    })
                }} />
            </div>
            <div className='regi-content'>
                <span>일정 날짜 : </span>
                <input type='date' />
            </div>
            <div className='regi-content'>
                <span>일정 내용 : </span>
                <select onChange={(e) => {
                    setUserData({
                        /** ... :  */
                        ...userData,
                        content: e.target.value
                    })
                }}>
                    <option value={1}>경영/재무관리</option>
                    <option value={2}>CCTV 관제센터</option>
                    <option value={3}>Smart City</option>
                    <option value={4}>시정상황판</option>
                    <option value={5}>교통/환경</option>
                    <option value={6}>통계/분석관리</option>
                    <option value={7}>재난/안전</option>
                    <option value={8}>관리지표분석</option>
                </select>
            </div>
            <div className='regi-content'>
                <span>진행 상황 : </span>
                <select onChange={(e) => {
                    setUserData({
                        ...userData,
                        resign: e.target.value
                    })
                }}>
                    <option value={false}>진행 중</option>
                    <option value={true}>진행 완료</option>
                </select>
            </div>
            <div className='regi-btn-wrap'>
                <button className='regi-btn' onClick={submitRegi}>등록</button>
            </div>

        </div>
    )
}

export default Registration
