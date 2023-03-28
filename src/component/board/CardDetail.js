
import { useLocation } from 'react-router-dom'
import '../../css/postdetail.css'



const CardDetail = () => {
    const { state } = useLocation();


    return (
        <div className='detail-line2'>
            <div className='detail-img-line'>
                <img alt='고객사 이미지' width={400} height={300} src={state?.img} />
            </div>
            <div className='detail-card-wrap'>
                <h1 className='detail-title'>고객사 : {state?.title}</h1>
                <div className='detail-content'>
                    <p className='detail-join-date'>일정 날짜 : {state?.date}</p>
                    <p className='detail-join-content'>일정 내용 : {state?.content}</p>
                    <p className='resign' style={{ color: state?.resign === false ? 'red' : 'blue' }}>{state?.resign === true ? "진행 완료" : "진행 중"}</p>
                </div>
            </div>

        </div>
    )
}

export default CardDetail
