import React from 'react'

export interface InputBoxProps {
    label: string;
    type: 'text' | 'password';
    placeholder: string;
    buttonTitle?: string;
}

export default function InputBox({label, type, placeholder, buttonTitle}: InputBoxProps) {

    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input className="input" type={type} placeholder={placeholder} />
                { buttonTitle &&
                <div className="input-disable-button">{buttonTitle}</div>}
            </div>
        <div className="input-message"></div>
    </div>
    )
}
