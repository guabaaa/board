import React from 'react'
import '../../css/multiselect.css'

const Multiselect = () => {
    return (
        <div className='select-wrap'>
            <div className='select' id=''>
                <select>
                    <option>대분류</option>
                    <option>최신순</option>
                    <option>카테고리</option>
                </select>
            </div>
            <div className='select' id=''>
                <select>
                    <option>중분류</option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </div>
        </div>
    )
}

export default Multiselect