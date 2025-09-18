import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import {
  Container,
  LoginBox,
  Title,
  Input,
  Button,
  EasyLogin,
  EasyLoginButtons,
  BottomBox,
  BottomLink,
  MeOutput,
  LoginForm,
  TopContainer,
} from "./Login.styled";
import { NoMenuBar } from "../style/common.styled";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Logo } from "./Signup.styled";

const USER = "user";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [meInfo, setMeInfo] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.logIn(usernameOrEmail, password);
      navigate("/static/My");
    } catch (error) {
      console.log("에러");
      console.log((error as Error).message);
      //toast.error((error as Error).message);
    }

    setMessage("");
      
  };


  const handleLogout = () => {
    localStorage.removeItem(USER);
    setMeInfo("");
    setMessage("로그아웃 되었습니다.");
    // window.location.href = "/login"; // 필요 시 리다이렉트
  };

  return (
    <NoMenuBar>
      <Container>
        <LoginBox>
          <Title>LOGIN</Title>
          <LoginForm onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="아이디 또는 이메일"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">로그인</Button>
          </LoginForm>

          <p>{message}</p>

          <EasyLogin>
            간편하게 시작하기
            <EasyLoginButtons></EasyLoginButtons>
          </EasyLogin>

          <BottomBox>
            <BottomLink onClick={() => navigate("/static/Signup")}>
              회원가입
            </BottomLink>
          </BottomBox>
            {/*
            <BottomLink onClick={handleMe}>
              me
            </BottomLink>
            <BottomLink onClick={handleLogout}>
              로그아웃
            </BottomLink>
          </BottomBox>

          <MeOutput>{meInfo}</MeOutput>
          */}
        </LoginBox>
      </Container>
    </NoMenuBar>
  );
};

export default Login;
