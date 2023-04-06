import React from 'react';
// import { format } from 'timeago.js';
import * as Styled from './Post.style';

const postData = {
  votes: 10,
  answers: 5,
  views: 20,
  title: '제목',
  summary: '내용 요약 미리보기',
  tags: ['node', 'java'],
};

const Post = () => {
  // const createdAt = format(postData.createdAt, 'en_US');

  return (
    <Styled.Container>
      <Styled.State>
        <li>{postData.votes} votes</li>
        <li>{postData.answers} answers</li>
        <li>{postData.views} views</li>
      </Styled.State>
      <Styled.Content>
        <Styled.Top>
          <h1>{postData.title}</h1>
          <p>{postData.summary}</p>
        </Styled.Top>
        <Styled.Bot>
          <Styled.Tags>
            {postData.tags.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </Styled.Tags>
          <Styled.AuthorInfo>
            <li>아이콘</li>
            <li>아이디</li>
            <li>날짜</li>
          </Styled.AuthorInfo>
        </Styled.Bot>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Post;
