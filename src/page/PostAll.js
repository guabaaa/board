import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../component/board/Card";
import Pagination from "../component/board/Pagination";
import Search from "../component/board/Search";
import Regibtn from "../component/navigation/Regibtn";
import Api from "../config/Api";

const PostAll = () => {
    /** 현재 페이지 번호 */
    const [limit, setLimit] = useState(3);
    /** 페이지 당 게시물 수 */
    const [page, setPage] = useState(1);
    /** 첫 게시물 위치 */
    const offset = (page - 1) * limit;

    const { q } = useParams();

    /**
     *  post list
     */
    const [data, setData] = useState(null);
    console.log(q)
    // /** Api 호출 */
    const action = async () => {
        const response = await Api.getBoardList({ title: q || "" });
        console.log(q)
        setData(response);
    };
    useEffect(() => {
        action();
    }, [q]);


    return (
        <div>

            <Search />
            <div className="card-wrap">
                <label className="card-limit-sel">
                    <select
                        type="number"
                        value={limit}
                        onChange={({ target: { value } }) => setLimit(Number(value))}
                    >
                        <option value="3">3개씩 보기</option>
                        <option value="6">6개씩 보기</option>
                        <option value="9">9개씩 보기</option>
                        <option value="12">12개씩 보기</option>
                        <option value="50">50개씩 보기</option>
                        <option value="100">100개씩 보기</option>
                    </select>
                </label>
                <div className="cardall-wrap">
                    {data?.slice(offset, offset + limit).map((menu) => (
                        <Card item={menu} />
                    ))}
                </div>
            </div>

            <Regibtn />

            <div>
                <Pagination
                    total={!data || data?.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </div>
    );
};

export default PostAll;