import React from 'react'

//  Properties (속성)
// - 부모 컴포넌트 (호출부)에서 자식 컴포넌트로 데이터를 전달하기 위한 *객체*
// - 부모 컴포넌트에서는 HTML과 동일한 방식 (속성명 = 데이터)로 전달
// - 자식 컴포넌트에서는 JS의 매개변수 방식으로 받음
// - 전달할 수 있는 데이터는 JS로 표현할 수 있는 모든 형태
// - 컴포넌트가 리렌더링되는 기준
// - Properties는 부모 요소에서 자식 요소로 데이터 전송 가능 / 자식요소 에서 부모 요소로 데이터 전송 불가

interface Props {
    title: String;
    content: String;
    nickname?: String;
}

function Child({title, content, nickname = '비공개'}: Props /* 방법4.  짧게 쓰는 놈(대중적)*/) {  //props: Props 이거 매개변수에 넣으면 방법 1,2,3  // (='비공개')는 기본값 지정

    // 방법 1. 무식이
    // props = {
    //     title = '제목1',
    //     content = '내용1'
    // }

    // 방법 2. 조금 배운놈
    // const title = props.title;
    // const content = props.content;

    // 방법 3. 조금 더 배운놈
    // const {title, content} = props;

    return(
        <div>
            <h1>{title}</h1>
            <h4>{nickname}</h4>
            <p>{content}</p>
        </div>
    )
}

export default function Properties() {
    return (
        <>
            <Child title='제목 1' content='내용1' nickname='로제' />
            <Child title='국제인구 이동' content='보도자료' />
            <Child title='외국인 지역별 통계' content='제가 못찾는 걸까요?' />
        </>
    )
}
