import styled from "styled-components";

export const Container = styled.main`
  max-width: 840px;
  height: 600px;
  margin: 30px auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const FilterGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
