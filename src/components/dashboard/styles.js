import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 80%;
  padding: 50px;
  align-items: center;
  gap: 50px;
`;

export const CardHolder = styled.div`
  display: flex;
  gap: 30px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 258px;
  height: 134px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  color: #9fa2b4;
  p {
    font-size: 19px;
  }
  span {
    font-size: 40px;
    color: #252733;
  }

  &:hover {
    p {
      color: #3751ff;
    }
    span {
      color: #3751ff;
    }
    border-color: #3751ff;
    cursor: pointer;
  }
`;

export const ChartContainer = styled.div`
  width: 961px;
  height: 646px;
`;
export const Titulo = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;
