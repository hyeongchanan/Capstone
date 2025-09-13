// src/pages/Signup.tsx
import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
  Message,
  Logo,
} from "./Signup.styled";
import { useNavigate } from "react-router-dom";
import { NoMenuBar } from "../style/common.styled";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    try {
      const response = await axios.post("/api/signup", {
        username,
        email,
        password,
      });
      setMessage(response.data || "회원가입 성공!");
      setMessageType("success");
    } catch (error: any) {
      if (error.response && error.response.data) {
        setMessage(`에러: ${error.response.data}`);
      } else {
        setMessage("회원가입 중 오류가 발생했습니다.");
      }
      setMessageType("error");
    }
  };

  return (
    <NoMenuBar>
    <Container>
      <Logo onClick={() => navigate("/static/")}>L.B</Logo>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          사용자명
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Label>

        <Label>
          이메일
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Label>

        <Label>
          비밀번호
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Label>

        <Button type="submit">회원가입</Button>
      </Form>

      {message && <Message $type={messageType}>{message}</Message>}
    </Container>
    </NoMenuBar>
  );
};

export default Signup;
