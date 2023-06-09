import styled from "styled-components";

export const Container = styled.li`
  width: 840px;
  height: 122px;
  display: flex;
  gap: 16px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 16px;
  font-size: 13px;
`;

export const State = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 0 0 100px;
  gap: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
`;

export const Top = styled.div`
  h1 {
    font-size: 17px;
    margin-bottom: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h1:hover {
    color: red;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4;
  }
`;

export const Bot = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TagGroup = styled.ul`
  display: flex;
  gap: 4px;
`;

export const AuthorInfo = styled.ul`
  display: flex;

  img {
    width: 20px;
    height: 20px;
    border-radius: 5px;
  }
`;
