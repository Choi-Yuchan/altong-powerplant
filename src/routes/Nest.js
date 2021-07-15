import React from 'react';
import NestContain from '../components/nest/NestContain';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    
    const uHaveTo = () => {
      if(window.confirm("You did a good job!")){
        console.log("this project won't be released. Run!");
      } else {
        alert("you cancel everything")
      }
    }
        
    return (
      <NestWrap>
          <Mask>{t("guideSentence")}</Mask>
          <ToNewbie onClick={uHaveTo}></ToNewbie>
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
  
  const ToNewbie = styled.button`
    background: #fefefe;
    outline: none;
    border: none;
    width: 50px;
    height: 30px;
    cursor: pointer;
  `;
   
  export default Nest;
  