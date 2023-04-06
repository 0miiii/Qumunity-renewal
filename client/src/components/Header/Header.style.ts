import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 10px 0;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const Inner = styled.div`
  max-width: 840px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
`;

export const Nav = styled.nav`
  > ul {
    display: flex;
    gap: 10px;
  }
`;

export const BtnGroup = styled.ul`
  display: flex;
  gap: 10px;
`;
