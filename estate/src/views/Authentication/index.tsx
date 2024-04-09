import React, { useState } from 'react';
import './style.css';

type AuthPage = 'sign-in' | 'sign-up';

function SignIn () {

  const onSignInButtonClickHandler = () => {

  };

  return (
    <div className='authentication-contents'>
      <div className='authentication-input-container'></div>
      <div className='authentication-button-container'>
        <div className='primary-button full-width' onClick={onSignInButtonClickHandler}>로그인</div>
        <div className='text-link'>회원가입</div>
      </div>
      <div className='short-divider'></div>
      <div className='authentication-sns-container'></div>
    </div>
  );
}

function SignUp () {
  return (
    <>회원가입</>
  );
}

export default function Authentication() {

  const [page, setPage] = useState<AuthPage>('sign-in');

  const AuthenticationContents = [page === 'sign-in' ? <SignIn /> : <SignUp />]

  return (
    <div id='authentication-wrapper'>
      <div className='authentication-image-box'></div>
        <div className='authentication-box'>
          <div className='authentication-container'>
            <div className='authentication-title h1'>
            {'임대 주택 가격 서비스'}
            </div>
            {AuthenticationContents}
          </div>
        </div>
    </div>
  );
}
