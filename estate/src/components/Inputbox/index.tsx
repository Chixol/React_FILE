//  IdInputBox, PasswordInputBox 함수형 컴포넌트 생성
// 각각의 컴포넌트는 모두 export 가능하도록 내보냄
import React, { ChangeEvent } from "react";
import './style.css';

export interface InputBoxProps {
    label: string;
    type: 'text' | 'password';
    value: string;
    placeholder: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    buttonTitle?: string;
}

export default function InputBox({label, type, value, placeholder, onChangeHandler, buttonTitle}: InputBoxProps) {

    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input className="input" type={type} value={value} placeholder={placeholder} onChange={onChangeHandler} />
                { buttonTitle &&
                <div className="input-disable-button">{buttonTitle}</div>}
            </div>
        <div className="input-message"></div>
    </div>
    )
}