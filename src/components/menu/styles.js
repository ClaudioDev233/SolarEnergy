import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  img {
    height: 200px;
    width: 200px;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px, 24px, 16px, 24px;
  gap: 10px;
  width: 252px;
  height: 64px;
  font-size: 18px;
  color: #a098ae;
  border-radius: 20px;

  div {
    align-self: left;
    text-align: left;
  }
  &:hover {
    color: #ffffff;
    background-color: #4cbc9a;
  }
`;
