import React from 'react'
import InputBox, { InputBoxProps } from './InputBox'
import './style.css';
import './common.css';

const InputBoxes: InputBoxProps[] = [
    {
        label: '아이디',
        type: 'text',
        placeholder: '아이디를 입력하세요.',
        buttonTitle: '중복 확인'
    },
    {
        label: '비밀번호',
        type: 'password',
        placeholder: '비밀번호를 입력하세요.'
    },
    {
        label: '비밀번호 확인',
        type: 'password',
        placeholder: '비밀번호를 입력하세요.'
    },
    {
        label: '이메일',
        type: 'text',
        placeholder: '이메일을 입력하세요.',
        buttonTitle: '이메일 인증'
    },
    {
        label: '인증번호',
        type: 'text',
        placeholder: '인증번호 4자리를 입력하세요.',
        buttonTitle: '인증 확인'
    },
];

export default function SignUpContainer() {
    
    const InputBoxComponents = 
        InputBoxes.map((item, index) => <InputBox key={index} {...item} />)

    return (
        <>
            {InputBoxComponents}
        </>
    )
}
