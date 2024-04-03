//  IdInputBox, PasswordInputBox 함수형 컴포넌트 생성
// 각각의 컴포넌트는 모두 export 가능하도록 내보냄
import React from "react";

export default function InputBox() {
    return (
    <>
        <IdInputBox />
        <PasswordInputBox />
    </>
    );
}

export function IdInputBox() {
    return (
        <>
            <div className="sign-in-input-container">
                <div className="input-box">
                    <div className="input-label label">아이디</div>
                    <div className="input-content-box">
                        <input id="id" className="input" type="text" placeholder="아이디를 입력해주세요."/>
                    </div>
                    <div className="input-message"></div>
                </div>
            </div>
        </>
    );
}

export function PasswordInputBox() {
    return (
        <>
            <div className="input-box">
                <div className="input-label label">비밀번호</div>
                <div className="input-content-box">
                    <input id="password" className="input" type="password" placeholder="비밀번호를 입력해주세요."/>
                </div>
                <div id="sign-in-message" className="input-message error"></div>
            </div>
        </>
    );
}