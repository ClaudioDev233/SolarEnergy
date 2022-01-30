import styled from "styled-components";

export const LoginContainer = styled.div`
  align-self: flex-start;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  color: #374557;
`;

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LoginImage = styled.section`
  height: 100vh;
  width: 50%;
  img {
    height: 100vh;
    width: 50vw;
  }
`;
export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 16px;
  margin-top: 2px;
`;

export const Logo = styled.img`
  width: 310px;
  height: 310px;
`;

export const Container = styled.div`
  display: flex;
`;

export const Titulo = styled.p`
  font-size: 32px;
  font-weight: 500;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
  padding-left: 15px;
  border: 1px solid black;
  border-radius: 10px;
  width: 400px;
  height: 60px;

  gap: 15px;
  input {
    width: 90%;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

export const SubmitButton = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 420px;
  height: 60px;
  background-color: #4cbc9a;
  gap: 15px;
  &:hover {
    background-color: #1f8e6b;
  }
  input {
    border: none;
    font-size: 24px;
    color: #ffffff;
    font-weight: 500;
    width: 90%;
    height: 90%;
    background-color: #4cbc9a;
    cursor: pointer;
    &:hover {
      background-color: #1f8e6b;
    }
  }
`;
