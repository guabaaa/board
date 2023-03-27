import React from 'react'


function Pagination({ total, limit, page, setPage }) {
    /** <PostAll />로부터 총 게시물 수(total)와 페이지 당 게시물 수(limit) 현재페이지번호(page)를
     * props 로 받아옴
     */

    /** disabled={page === } 설정을 해놓으면 더 이상 작동 하지 못하게 구현(boolean) */

    /** 총 게시물 수에서 페이지 당 게시물 수를 나눠 필요한 페이지의 개수를 계산함.  */
    const numPages = Math.ceil(total / limit);

    return (
        <div className='pagination-wrap'>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                &lt;
            </button>
            {Array(numPages)
                .fill()
                .map((_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                        aria-current={page === i + 1 ? "page" : null}
                    >
                        {i + 1}
                    </button>
                ))}
            <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
                &gt;
            </button>
        </div>
    )
}

export default Pagination
