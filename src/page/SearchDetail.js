import React from 'react'
import Card from '../component/board/Card'


function SearchDetail({ data }) {
    return (
        <div>
            {data.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </div>
    )
}


export default SearchDetail

