import React from 'react'
import '../../css/multiselect.css'

const MultiSelect = () => {
    return (
        <div className='select-wrap'>
            <div className='select' id='first-sel'>
                <select>
                    <option>대분류</option>
                    <option>가입날짜순</option>
                    <option>가나다순</option>
                </select>
            </div>
            <div className='select' id='second-sel'>
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

export default MultiSelect