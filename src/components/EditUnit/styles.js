import styled from "styled-components";
export const Titulo = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 30%;
  gap: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.input`
  width: 252px;
  height: 59px;
  font-size: 18px;
  font-weight: 100;
  color: #ffffff;
  letter-spacing: 0.5px;
  border: none;
  border-radius: 20px;
  background-color: #4c5df1;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
`;
