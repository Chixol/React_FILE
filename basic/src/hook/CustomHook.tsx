import React, { useState } from 'react'

// Custom Hook :
// - 리액트의 훅 함수는 반드시 함수형 컴포넌트의 코드 블럭에서만 호출 가능
// - 

export default function CustomHook() {

    const [page, setPage] = useState<number>(1);
    const [section, setSection] = useState<number>(1);
    const [boardList, setBoardList] = useState<any[]>([]);
    const [viewList, setViewList] = useState<any[]>([]);

    const setNextPage = () => {

    }

    const setPreviousPage = () => {

    }

    const setNextSection = () => {

    }

    const setPreviousSection = () => {

    }

    return (
        <div>CustomHook</div>
    )
}
