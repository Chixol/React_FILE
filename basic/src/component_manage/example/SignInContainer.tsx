import React from 'react'
import InputBox from './InputBox'
import './style.css';
import './common.css';

export default function SignInContainer() {
    return (
        <>
        <InputBox   label = '아이디' type = 'text' placeholder = '아이디를 입력해주세요.' buttonTitle = '중복 확인'/>
        <InputBox   label = '비밀번호' type = 'text' placeholder = '비밀번호를 입력해주세요.'/>
        <InputBox   label = '비밀번호 확인' type = 'text' placeholder = '비밀번호를 입력해주세요.'/>
        <InputBox   label = '이메일' type = 'text' placeholder = '이메일을 입력해주세요.' buttonTitle='이메일 인증'/>
        <InputBox   label = '인증번호' type = 'text' placeholder = '인증번호 4자리를 입력하세요' buttonTitle='인증 확인'/>
        </>
    )
}
