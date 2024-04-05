import React from 'react'

// 리스트 렌터링 : 
// - JSX 내부에서 반복적으로 렌더링하는 요소에 대해 반복 처리
// - JSX 안에서는  for 혹은 while과 같은 반복문을 사용할 수 없음
// - 리스트의 각종 메서드를 활용

interface Human {
    name : string;
    age : number;
    job : string;
}

function ListItem ({ name, age, job }: Human) {

    return (
        <div>
            <h1>이름 : {name}</h1>
            <h4>나이 : {age}</h4>
            <h4>직업 : {job}</h4>
        </div>
    )
}

export default function ListRendering() {
    return (
        <>
            <ListItem name='홍길동' age={20} job='학생' />
            <ListItem name='김철수' age={30} job='개발자' />
            <ListItem name='이영희' age={27} job='경찰' />
            <ListItem name='김민수' age={12} job='학생' />
        </>
    )
}
