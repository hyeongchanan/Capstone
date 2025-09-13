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
    /*
    if (!usernameOrEmail || !password) {
      setMessage("아이디/이메일과 비밀번호를 입력하세요.");
      return;
    }

    try {
      const res = await axiosInstance.post("/login", {
        usernameOrEmail,
        password,
      });
      console.log(res.data?.accessToken);
      if (res.data?.accessToken) {
        localStorage.setItem(USER, res.data.accessToken);
        setMessage("로그인 성공! 이동합니다...");
        // window.location.href = "/home"; // 필요 시 리다이렉트
      } else {
        setMessage("로그인 응답이 올바르지 않습니다.");
      }
    } catch (err: any) {
      if (err.response?.status === 401) {
        setMessage("아이디/이메일 또는 비밀번호가 올바르지 않습니다.");
      } else {
        setMessage("로그인 중 오류가 발생했습니다. " + (err.message || ""));
      }
    }*/
      
  };

  const handleMe = async () => {
    const token = localStorage.getItem(USER);
    console.log(token)
    if (!token) {
      setMeInfo("토큰이 없습니다. 먼저 로그인하세요.");
      return;
    }

    try {
      const res = await axiosInstance.get("/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMeInfo(JSON.stringify(res.data, null, 2));
    } catch (err: any) {
      if (err.response) {
        setMeInfo(
          `오류 ${err.response.status}: ${JSON.stringify(err.response.data)}`
        );
      } else {
        setMeInfo("요청 실패: " + (err.message || ""));
      }
    }
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
            <BottomLink onClick={handleMe}>
              me
            </BottomLink>
            <BottomLink onClick={handleLogout}>
              로그아웃
            </BottomLink>
          </BottomBox>

          <MeOutput>{meInfo}</MeOutput>
        </LoginBox>
      </Container>
    </NoMenuBar>
  );
};

export default Login;
