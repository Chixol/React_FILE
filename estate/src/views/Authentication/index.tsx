import React, { ChangeEvent, useState } from 'react';
import './style.css';
import SignInBackground from 'assets/image/sign-in-background.png'
import SignUpBackground from 'assets/image/sign-up-background.png'
import InputBox from 'components/Inputbox';


type AuthPage = 'sign-in' | 'sign-up';

interface SnSContainerProps{
  title: string
}

function SnSContainer({title}: SnSContainerProps) {

  const onSnsButtonClickHandler = (type: 'kakao' | 'naver') => {
    alert(type)
  };

  return(
    <div className='authentication-container'> 
      <div className='sns-container-title label'>{title}</div>
      <div className='sns-button-container'>
        <div className='sns-button kakao-button' onClick={() => onSnsButtonClickHandler('kakao')}></div>
        <div className='sns-button naver-button' onClick={() => onSnsButtonClickHandler('naver')}></div>
      </div>
    </ div>
  )
} ;

interface Props {
  onLinkClickHandler: () => void
};

function SignIn ({ onLinkClickHandler }: Props) {

    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
  
    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setId(event.target.value);
    };

    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };

    const onSignInButtonClickHandler = () => {
      alert(`아이디 : ${id} / 비밀번호 : ${password}`)
      setId('');
      setPassword('');
    };



  return (
    <div className='authentication-contents'>
      <div className='authentication-input-container'>
        <InputBox label="아이디" type="text" value={id} placeholder="아이디를 입력해주세요" onChangeHandler={onIdChangeHandler}/>
        <InputBox label="비밀번호" type="password" value={password} placeholder="비밀번호를 입력해주세요"  onChangeHandler={onPasswordChangeHandler}/>
      </div>
      <div className='authentication-button-container'>
        <div className='primary-button full-width' onClick={onSignInButtonClickHandler}>로그인</div>
        <div className='text-link' onClick={onLinkClickHandler}>회원가입</div>
      </div>
      <div className='short-divider'></div>
      <SnSContainer title='SNS 로그인' />
      <div className='authentication-sns-container'></div>
    </div>
  );
};

function SignUp ({onLinkClickHandler}: Props) {

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [authNumber, setAuthNumber] = useState<string>('');

  const [idButtonStatus, setIdButtonStatus] = useState<boolean>(false); 
  const [emailButtonStatus, setEmailButtonStatus] = useState<boolean>(false);
  const [authNumberButtonStatus, setAuthNumberButtonStatus] = useState<boolean>(false);

  const [isIdCheck, setIdCheck] = useState<boolean> (false);
  const [isEmailCheck, setEmailCheck] = useState<boolean> (false);
  const [isAuthNumberCheck, setAuthNumberCheck] = useState<boolean> (false);

  const [idMessage, setIdMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [passwordCheckMessage, setPasswordCheckMessage] = useState<string>('');
  const [emailMessage, setEmailMassage] = useState<string>('');
  const [authNumberMessage, setAuthNumberMessage] = useState<string>('');

  const [isIdError, setIdError] = useState<boolean>(false);
  const [isEmailError, setEmailError] = useState<boolean>(false);
  const [isAuthNumberError, setAuthNumberError] = useState<boolean>(false);

// 뜻 : 다음과 같은 값이 있어야 회원가입(버튼)이 활성화 된다
const isSignUpActive = isIdCheck && isEmailCheck && isAuthNumberCheck && password && passwordCheck;

//아래 세개는 모두 같은 동작(코드만 다를뿐 쓰기 나름)
const signUpButtonClass = isSignUpActive ? 'primary-button full-width' : 'disable-button full-width'
// const signUpButtonClass =( isSignUpActive ? 'primary' : 'disable');
// const signUpButtonClass = `${isSignUpActive ? 'primary' : 'disable'}-button full-width'`;


  const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setId(value);
    setIdButtonStatus(value !== '');
    setIdCheck(false);
    setIdMessage('');
  };

  const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,13}$/;
    const isPasswordPattern = passwordPattern.test(value);
    const passwordMessage = isPasswordPattern ? '' :  value ? '영문, 숫자를 혼용하여 8 ~ 13자 입력해주세요.' : '';
    setPasswordMessage(passwordMessage);
    const isEqualPassword = passwordCheck === value;
    const passwordCheckMessage = isEqualPassword ? '' : passwordCheck ? '비밀번호가 일치하지 않습니다.' : '';
    setPasswordCheckMessage(passwordCheckMessage);
};

const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setPasswordCheck(value);
  const isEqualPassword = password === value;
  const passwordCheckMessage = isEqualPassword ? '' : value ? '비밀번호가 일치하지 않습니다.' : '';
  setPasswordCheckMessage(passwordCheckMessage);
};

const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setEmail(value);
  setEmailButtonStatus(value !== '');
  setEmailCheck(false);
  setAuthNumberCheck(false);
  setEmailMassage('');
};

const onAuthNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setAuthNumber(value);
  setAuthNumberButtonStatus(value !== '');
  setAuthNumberCheck(false);
  setAuthNumberMessage('');
};

const onIdButtonClickHandler = () => {
  if(!idButtonStatus) return;
  const idCheck = id !== 'admin';
  setIdCheck(idCheck);
  setIdError(!idCheck);
  const idMessage = idCheck ? '사용 가능한 아이디 입니다.' : '이미 사용중인 아이디 입니다.';
  setIdMessage(idMessage);
};

const onEmailButtonClickHandler = () => {
  if(!emailButtonStatus) return;
  const emailPattern = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-z]{2,4}$/;
  const isEmailPatton = emailPattern.test(email);
  setEmailCheck(isEmailPatton);
  setEmailError(!isEmailPatton);
  const emailMessage = isEmailCheck ? '인증번호가 전송되었습니다.' : '이메일 형식이 아닙니다.';
  setEmailMassage(emailMessage);
};

const onAuthNumberButtonClickHandler = () => {
  if(!authNumberButtonStatus) return;
  const authNumberCheck = authNumber === "1234";
  setAuthNumberCheck(authNumberCheck);
  setAuthNumberError(!authNumberCheck);
  const authNumberMessage = authNumberCheck ? '인증번호가 확인되었습니다.' : '인증번호가 일치하지 않습니다.'
  setAuthNumberMessage(authNumberMessage);
};

const onSignUpButtonClickHandler = () => {
  if(!isSignUpActive) return;
  alert('회원가입');
};


  return (
    <div className='authentication-contents'>
      <SnSContainer title='SNS 회원가입' />
      <div className='short-divider'></div>
      <div className='authentication-input-container'>

      <InputBox label="아이디" type="text" value={id} placeholder="아이디를 입력해주세요" onChangeHandler={onIdChangeHandler} buttonTitle="중복 확인" buttonStatus={idButtonStatus} onButtonClickHandler={onIdButtonClickHandler} message={idMessage} error={isIdError}/>

      <InputBox label="비밀번호" type="password" value={password} placeholder="비밀번호를 입력해주세요" onChangeHandler={onPasswordChangeHandler} message={passwordMessage} error/>

      <InputBox label="비밀번호 확인" type="password" value={passwordCheck} placeholder="비밀번호를 입력해주세요" onChangeHandler={onPasswordCheckChangeHandler} message={passwordCheckMessage} error/>

      <InputBox label="이메일" type="text" value={email} placeholder="이메일을 입력해주세요" onChangeHandler={onEmailChangeHandler} buttonTitle="이메일 인증" buttonStatus={emailButtonStatus} onButtonClickHandler={onEmailButtonClickHandler} message={emailMessage} error={isEmailError}/>

      { isEmailCheck && 
      <InputBox label="인증번호" type="text" value={authNumber} placeholder="인증번호 4자리를 입력해주세요" onChangeHandler={onAuthNumberChangeHandler} buttonTitle="인증 확인" buttonStatus={authNumberButtonStatus} onButtonClickHandler={onAuthNumberButtonClickHandler} message={authNumberMessage} error={isAuthNumberError}/>
      }
      

      </div>
      <div className='authentication-button-container'>
        <div className={signUpButtonClass} onClick={onSignUpButtonClickHandler}>회원가입</div>
        <div className='text-link' onClick={onLinkClickHandler}>로그인</div>
      </div>
    </div>
  );
};

export default function Authentication() {

  const [page, setPage] = useState<AuthPage>('sign-in');

  const onLinkClickHandler = () => {
    if (page === 'sign-in') setPage('sign-up');
    else setPage('sign-in');
  };

  const AuthenticationContents = [page === 'sign-in' ? <SignIn onLinkClickHandler={onLinkClickHandler} /> : <SignUp onLinkClickHandler={onLinkClickHandler}/>]

  const imageBoxStyle = { backgroundImage: `url(${page === 'sign-in' ? SignInBackground : SignUpBackground}` }

  return (
    <div id='authentication-wrapper'>
      <div className='authentication-image-box' style={imageBoxStyle}></div>
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
};
