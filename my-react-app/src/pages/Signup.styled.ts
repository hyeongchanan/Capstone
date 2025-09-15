// src/style/SignupStyles.ts
import styled from "styled-components";
import { colors } from "../style/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.secondary};
  position: relative;
`;

export const Logo = styled.h1`
  padding: 20px;
  font-weight: 900;
  text-align: left;
  margin-bottom: 20px;
  color: ${colors.mainBlue};
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #444;
`;

export const Input = styled.input`
  margin-top: 6px;
  min-width: 350px;
  padding: 10px;
  background-color: #e7e7e7ff;
  font-size: 14px;
  height: 45px;
  border: none;
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 0 12px;
  font-size: 14px;

  &:focus {
    border-color: ${colors.mainBlue};
    outline: none;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

export const Button = styled.button`
  margin-top: 25px;
  background: ${colors.mainBlue};
  color: white;
  font-size: 14px;
  height: 45px;
  border: none;
  border-radius: 4px;
  margin-bottom: 12px;
  padding: 0 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #2675d0ff;
  }
`;

export const Message = styled.div<{ $type: "success" | "error" | "" }>`
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({ $type }) =>
    $type === "success" ? "green" : $type === "error" ? "red" : "black"};
`;
