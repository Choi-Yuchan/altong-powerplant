import React from 'react';
import NestContain from '../components/nest/NestContain';
import styled from 'styled-components';

const nestList = [
    {
        id:1,
        nestname: '집사들의 모임',
        member: '475,890',
        nestimg: 'cat.jpg',
        recommend: false
    },
    {
        id:2,
        nestname: '여행가고 싶은 사람들',
        member: '34,268',
        nestimg: 'tour.jpg',
        recommend: true
    },
    {
        id:3,
        nestname: '여행가고 싶은 사람들',
        member: '34,268',
        nestimg: 'tour.jpg',
        recommend: true
    },
    {
        id:4,
        nestname: '여행가고 싶은 사람들',
        member: '34,268',
        nestimg: 'tour.jpg',
        recommend: true
    },
    {
        id:5,
        nestname: '여행가고 싶은 사람들',
        member: '34,268',
        nestimg: 'tour.jpg',
        recommend: true
    }
  ];
  
  const nestList2 = [
    {
        id:1,
        nestname: '타코야끼 매니아',
        member: '42,870',
        nestimg: 'takoyaki.jpg',
        recommend: false
    },
    {
        id:2,
        nestname: '디자인 하자',
        member: '32,817',
        nestimg: 'design.jpg',
        recommend: true
    },
    {
        id:3,
        nestname: '디자인 하자',
        member: '32,817',
        nestimg: 'design.jpg',
        recommend: true
    },
    {
        id:4,
        nestname: '디자인 하자',
        member: '32,817',
        nestimg: 'design.jpg',
        recommend: true
    },
    {
        id:5,
        nestname: '디자인 하자',
        member: '32,817',
        nestimg: 'design.jpg',
        recommend: true
    }
  ]
  
  
  function Nest() {
    return (
      <NestWrap>
        <NestContain open={true} nestList={nestList} />
        <NestContain open={false} nestList={nestList2} />
        <NestLink>NEST 홈으로 바로가기</NestLink>
      </NestWrap>
    );
  }

  const NestWrap = styled.div`
    padding:0 0.625rem;
    max-width:800px;
    margin:0 auto;
  `;

  const NestLink = styled.a`
    font-size:0.5rem;
    display:block;
    color:#999;
    cursor:pointer;
    text-align:right;
    margin-top:-20px;
    position:relative;
    z-index:2;
`;
  
  export default Nest;
  