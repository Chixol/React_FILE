import React from 'react'

//  Properties (속성)
// - 부모 컴포넌트 (호출부)에서 자식 컴포넌트로 데이터를 전달하기 위한 *객체*
// - 부모 컴포넌트에서는 HTML과 동일한 방식 (속성명 = 데이터)로 전달
// - 자식 컴포넌트에서는 JS의 매개변수 방식으로 받음
// - 전달할 수 있는 데이터는 JS로 표현할 수 있는 모든 형태
interface Props {
    title: String;
    content: String;
}

function Child(props: Props) {

    // props = {
    //     title = '제목1',
    //     content = '내용1'
    // }

    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default function Properties() {
  return (
    <>
        <Child title='제목 1' content='내용1' />
        <Child />
        <Child />
    </>
  )
}
