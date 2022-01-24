import styled from "styled-components";

export const Global = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "area1 area2"
    "area1 area2";
`;
