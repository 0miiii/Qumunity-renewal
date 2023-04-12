import styled from "styled-components";

export const Container = styled.main`
  max-width: 840px;
  height: 600px;
  margin: 30px auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FilterGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TagList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  > li {
    border: 1px solid red;
    padding: 10px;
    height: 200px;
  }
`;

export const Tag = styled.div`
  display: inline-block;
  background-color: aquamarine;
  border-radius: 5px;
  padding: 5px;
`;
