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

export const Profile = styled.div`
  border: 1px solid red;
  display: flex;
  gap: 10px;

  > img {
    border: 1px solid green;
    border-radius: 5px;
    width: 70px;
    height: 70px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
