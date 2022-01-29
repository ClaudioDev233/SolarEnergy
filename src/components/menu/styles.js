import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  font-family: "Poppins", sans-serif;
`;

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

export const Section = styled.section`
  display: flex;
  width: fit-content;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #e8e8e8;
`;

export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;
export const Header = styled.header`
  display: flex;
  padding-left: 30px;
  align-items: center;
  height: 8%;
  background-color: #ffffff;
`;
