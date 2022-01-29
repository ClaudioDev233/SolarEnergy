import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;

  padding: 50px;
`;

export const Table = styled.table`
  text-align: center;
  width: 100%;
  filter: drop-shadow(0px 12px 26px rgba(16, 30, 115, 0.06));

  td {
    vertical-align: middle;
  }
`;

export const Thead = styled.thead`
  background-color: rgba(232, 232, 232, 0.2);
  height: 56px;
  font-weight: bold;
  th {
    vertical-align: middle;
  }
`;

export const Tbody = styled.tbody`
  background-color: #ffffff;
  color: #53575d;
  tr {
    border-top: 1px solid #e8e8e8;
  }
`;

export const Tr = styled.tr`
  height: 56px;
`;
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
`;

export const Titulo = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

export const Button = styled.button`
  border: none;
  color: #ffffff;
  cursor: pointer;
  border-radius: ${(props) => props.radius}px;
  background-color: ${(props) => props.bg};
  height: ${(props) => props.altura}px;
  width: ${(props) => props.tamanho}px;
  align-self: ${(props) => props.align};
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  a {
    color: #ffffff;
    text-decoration: none;
  }
`;
