import styled from "styled-components";

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
  gap: 20px;
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
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #53575d;
  font-size: 24px;
  font-weight: 500;
  gap: 10px;
`;

export const Select = styled.select`
  background: #fff;
  width: 200px;
  height: 30px;
`;

export const Error = styled.p`
  color: #dc3545;
  font-size: 11px;
`;
