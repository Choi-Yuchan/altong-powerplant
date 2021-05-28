import React from 'react';
import NestContain from '../components/nest/NestContain';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const langNest = {
  ko:{
    //고정
    guide:"지금은 서비스 준비중입니다.",
  }
}

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
    const guideText = langNest.ko.guide;
    
    return (
      <NestWrap>
          <Mask>{guideText}</Mask>
          {/* <NestContain open={true} nestList={nestList} />
          <NestContain open={false} nestList={nestList2} />
          <NestLink to="/">NEST 홈으로 바로가기</NestLink> */}
      </NestWrap>
    );
  }

  const NestWrap = styled.div`
    padding:0 0.625rem;
    max-width:800px;
    margin:0 auto;
  `;

  const Mask = styled.div`
    width:100%;
    /* height:100vh; */
    background-color:#fefefe;
    margin-top:1rem;
    padding-top:50%;
    font-weight:bold;
    font-size:1.25rem;
    text-align:center;
    z-index:2;
  `;
  
  const NestLink = styled(Link)`
    text-decoration:none;
    font-size:0.625rem;
    display:block;
    color:#999;
    cursor:pointer;
    text-align:right;
    margin:0 1rem 2rem 0;

`;
  
  export default Nest;
  