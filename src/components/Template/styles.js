import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  color: #374557;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  gap: 10px;
  width: 252px;
  height: 64px;
  font-size: 18px;
  color: #a098ae;
  border-radius: 20px;
  cursor: pointer;

  span {
    width: 30px;
    margin-left: 10px;
    align-items: center;
  }
  p {
    width: 150px;
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
  background-color: #fafafa;
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
