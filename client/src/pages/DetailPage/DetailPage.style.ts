import styled from "styled-components";

export const Container = styled.main`
  max-width: 840px;
  height: 600px;
  margin: 30px auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Detail = styled.section`
  width: 840px;
  border: 1px solid red;
`;

export const DetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TagGroup = styled.ul`
  display: flex;
  gap: 10px;
`;

export const AnswerInput = styled.section`
  width: 840px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: antiquewhite;
`;

export const AnswerGroup = styled.section`
  width: 840px;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    > li {
      border: 1px solid red;
      height: 50px;
    }
  }
`;
