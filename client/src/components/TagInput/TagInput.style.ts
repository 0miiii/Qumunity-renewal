import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid #30363d;
  border-radius: 3px;
  background-color: var(--main-bgc);

  input {
    width: 100%;
    padding: 5px;
  }
`;

export const TagGroup = styled.ul`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 0 5px;

  > li {
    margin-left: 3px;
  }
`;
