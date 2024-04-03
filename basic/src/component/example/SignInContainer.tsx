// SignInContainer 함수형 컴포넌트를 생성
// 해당 컴포넌트는 InputBox 컴포넌트를 2개 포함
// SignInContainer 컴포넌트를 기본값으로 내보내기

import React from 'react'
import { IdInputBox, PasswordInputBox } from './InputBox'
import './style.css';
import './common.css';

export default function SignInContainer() {
    return (
    <>
        <IdInputBox />
        <PasswordInputBox />
    </>
    )
}
