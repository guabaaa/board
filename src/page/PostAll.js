import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Card from '../component/board/Card';
import Pagination from '../component/board/Pagination';
import Search from '../component/board/Search';
import Regibtn from '../component/navigation/Regibtn';


const PostAll = () => {
    const [PostList, setPostList] = useState([]);
    /** 현재 페이지 번호 */
    const [limit, setLimit] = useState(3);
    /** 페이지 당 게시물 수 */
    const [page, setPage] = useState(1);
    /** 첫 게시물 위치 */
    const offset = (page - 1) * limit;

    const [query, setQuery] = useSearchParams();

    /** API 호출(데이터) */
    const getPosts = async () => {
        let searchQuery = query.get("q") || " ";
        let url = `http://localhost:5000/card?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setPostList(data);
    };

    useEffect(() => {
        getPosts();
    }, [query]);

    return (
        <div>
            <Search
            />
            <div className='card-wrap'>
                <label className='card-limit-sel'>
                    <select
                        type="number"
                        value={limit}
                        onChange={({ target: { value } }) => setLimit(Number(value))}
                    >
                        <option value='3'>3개씩 보기</option>
                        <option value='6'>6개씩 보기</option>
                        <option value='9'>9개씩 보기</option>
                        <option value='12'>12개씩 보기</option>
                    </select>
                </label>
                <div className='cardall-wrap'>
                    {PostList.slice(offset, offset + limit).map((menu) => (
                        <Card item={menu} />
                    ))}
                </div>
            </div>

            <Regibtn />

            <div>
                <Pagination
                    total={PostList.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </div>


    )
}

export default PostAll
