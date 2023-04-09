import styled from "styled-components";

export const Container = styled.main`
  max-width: 840px;
  height: 600px;
  border: 1px solid red;
  margin: 30px auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
