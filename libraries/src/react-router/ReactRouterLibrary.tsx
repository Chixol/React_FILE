import React from 'react'

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
    return (
        <div>
            ReactRouterLibrary
            <a href='http://localhost:3000/zustand'>Zustand로!</a>
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