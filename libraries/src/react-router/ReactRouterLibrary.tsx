import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// react-router 패키지 (라이브러리) :
// - react의 SPA(Single Page Application)에서 라우팅을 구현하기 위한 라이브러리
// - 웹 페이지에서 다양한 뷰와 경로를 관리할 수 있도록 도와줌
// - 웹 애플리케이션 내에서 URL 이동이 있을 때 웹 페이지를 새로고침 하지 않도록 함
// - 웹 애플리케이션 내에서 내비게이션 역할을 수행

// npm i react-router react-router-dom

// - root 경로에 있는 index.tsx의 root.render() 안에 포함되어 있는 <App /> 컴포넌트를 <BrowserRouter> 컴포넌트로 묶어야함
// <BrowserRouter> : URL을 사용하여 브라우저 주소 표시줄에 현재 위치를 저장하고 탐색할 수 있도록 하는 컴포넌트

// - 특정 URL 패턴에 대해서 컴포넌트를 각각 다르게 랜더링하고자 한다면 App.tsx에 <Routes> 컴포넌트와 <Route> 컴포넌트를 이용하여 경로에 따른 컴포는트를 지정

// <Routes> : 
// - <Route> 컴포넌트로 URL에 따른 컴포넌트 랜더링을 할 수 있도록 하는 컴포넌트

// <Route> :
// - URL 패턴에 따라서 랜더링하고자 하는 컴포넌트를 지정하는 컴포넌트
// - path  속성 : URL 패턴지정
// - element 속성 : 랜더링할 컴포넌트 지정
// - index 속성 : 현재 패턴의 기본 라우터로 지정

// http://localhost:3000
// http://localhost:3000/router
export default function ReactRouterLibrary() {

    // - a 요소로 페이지 전환을 하게 되면 새로운 요청을 보내게되어 반드시 페이지가 새로고침 됨
    // - 페이지가 새로고쳐지면 상태유지가 안됨
    
    // <Link> :
    // - 사용자가 해당 웹 애플리케이션 내에서 다른 페이지로 이동할 수 있도록 하는 컴포넌트
    // - a 요소의 href로 페이지 전환을 하게 되면 새로운 페이지로 전향되는 반면 <Link>는 새로고침을 하지 않고 URL만 변경
    // - 다른 웹 애플리케이션으로 이동하는 작업은 <Link>로 수행하지 않음
    // - 해당 <Link> 컴포넌트를 클릭했을 때 다른 작업을 같이 수행하고자 한다면 그 작업이 정상적으로 수행되지 않음
    // - 페이지 이동 전에 특정 작업 결과에 따라 이동하고 싶으면 <Link> 컴포넌트를 사용하지 않음
    const onLinkClick = () => {
        alert('클릭!');
    }

    // useNavigate() :
    // - Navigator 함수를 반환하는 훅 함수
    // - Navigator 함수는 특정 조건에 따라서 URL을 변경하고자 할 때 사용할 수 있음
    const navigator = useNavigate();
    const [count, setCount] = useState<number>(0);
    const onButtonClick = () => {
        if (count === 10) navigator('/zustand');
        setCount(count + 1);
    }

    return (
        <div>
            ReactRouterLibrary
            {/* <a href='http://localhost:3000/zustand'>Zustand로!</a> */}
            <Link to='/zustand' onClick={onLinkClick}>Zustand로!</Link>
            <div>
                <h4>{count}</h4>
                <button onClick={onButtonClick}>버튼</button>
            </div>
        </div>
    )
}

// http://localhost:3000/page1
// http://localhost:3000/router/page1
export function ReactRouterPage1() {
    return <h1>페이지 1</h1>
}

// http://localhost:3000/page2
// http://localhost:3000/router/page2
export function ReactRouterPage2() {
    return <h1>페이지 2</h1>
}