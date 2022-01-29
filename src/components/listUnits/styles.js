import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: lightsalmon;

  padding: 50px;
`;

export const Table = styled.table`
  border: 3px solid black;
  text-align: center;
  width: 100%;
`;

export const Thead = styled.thead`
  tr {
    background-color: #e8e8e8;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Titulo = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  color: white;

  background-color: ${(props) => props.bg};
  height: ${(props) =>
    props.altura === "createUnit" ? "20px" : "fit-content"};
  width: ${(props) => (props.tamanho === "default" ? "fit-content" : "300px")};
  align-self: ${(props) => props.align};
  a {
    color: white;
    text-decoration: none;
  }
`;
