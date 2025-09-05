import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useInput from '../hook/useInput';
import { validateEmail, validatePassword } from '../util/validateInput';
import { useAuth } from '../context/AuthContext';
import {
  ErrorMessage,
  InputSection,
  KakaoLogo,
  LoginButton,
  LoginMain,
  LoginSection,
  MyDiv,
} from './Login.styled';

const Login = () => {
  const navigate = useNavigate();
  const id = useInput(validateEmail);
  const pw = useInput(validatePassword);

  const auth = useAuth();
  /*
  useEffect(() => {
    if (auth.user) {
      navigate('/My', { replace: true });
    }
  }, [auth.user, navigate]);
  */
  const canSubmit = !id.error && !pw.error && id.value != '' && pw.value != ''
  const handleLoginClick = async() => {
    try {
      await auth.logIn(id.value, pw.value);
      navigate('/My');
    } catch (error) {
      //toast.error((error as Error).message);
    }
    };

    return (
      <MyDiv>
        <LoginMain>

          <LoginSection>
            <div>
              <InputSection
                placeholder="이메일"
                value={id.value}
                onChange={id.onChange}
                onBlur={id.onBlur}
                hasError={!id.isValid}
              />
              {!id.isValid && <ErrorMessage>{id.error}</ErrorMessage>}
            </div>
            <div>
              <InputSection
                type="password"
                placeholder="비밀번호"
                value={pw.value}
                onChange={pw.onChange}
                onBlur={pw.onBlur}
                hasError={!pw.isValid}
              />
              {!pw.isValid && <ErrorMessage>{pw.error}</ErrorMessage>}
            </div>
            <LoginButton
              disabled={!canSubmit}
              onClick={handleLoginClick}
              notVaild={!canSubmit}
            >
              로그인
            </LoginButton>
          </LoginSection>
        </LoginMain>
      </MyDiv>
    )
}

export default Login
