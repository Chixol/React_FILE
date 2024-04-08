import React, { KeyboardEvent, MouseEvent } from 'react'


// 이벤트 처리 :
// - 웹 페이지(컴포넌트)가 사용자와의 상호작용을 받아들여 그것에 대한 처리를 하는 것
// - React 컴포넌트에서는 addEventListener를 사용하지 않고 인라인 형식의 on이벤트 속성을 사용
// - on이벤트 속성은 lowerCamelCase를 따름
// - on이벤트에 콜백 함수를 전달
export default function EventComponent() {
    const onClickHandler = () => {
        alert('Click!!');
    };

    // onClick : 클릭이 발생했을때
    // onChange : input 요소에서 값이 변경됐을 때
    // onKeyDown : input 요소에서 키보드 입력이 발생했을때

    // 각 이벤트의 콜백 함수는 이벤트 객체를 매개변수로 받을 수 있음
    // TypeScript는 이벤트 객체의 타입은 '특정 Event<이벤트가 발생한 요소>'
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onClickHandler ();
    }

    let count = 0;
    const onCountAddHandler = (event: MouseEvent<HTMLButtonElement>) => {
        count++;
        console.log(count);
    }

    return (
        <>
            <input onKeyDown={onKeyDownHandler} />
            <button onClick={onClickHandler}>Click</button>
            <button onClick={onCountAddHandler}>+</button>
            <h1>{count}</h1>
        </>
    );
}
