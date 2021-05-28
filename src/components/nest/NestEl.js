import React from 'react';
import styled from 'styled-components';

function NestEl({nestlist, count}) {
    
    return (
        <NestElDiv count={count}>
            <NestImg imgurl={process.env.PUBLIC_URL + '/images/' + nestlist.nestimg }>
                <NestMask></NestMask>
                <NestElText>
                    <NestName>{nestlist.nestname}</NestName>
                    <NestMember>가입자 수 {nestlist.member}명</NestMember>
                </NestElText>
                {
                    nestlist.recommend === true
                    ? <NestRecommend src={process.env.PUBLIC_URL + '/images/recommend01.png'}></NestRecommend>
                    : null
                }
            </NestImg>
        </NestElDiv>
    );
}

const NestElDiv = styled.div`
    width:${props => 100/props.count}%;
    height:25vh;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.3s;
    &:hover {
        transform:translateY(-5px);
    }
    &:active {
        transform:translateY(0);
    }
`;

const NestImg = styled.a`
    width:85%;
    height:85%;
    border-radius:6px;
    box-shadow:3px 3px 6px rgba(0,0,0,0.16);
    display:grid;
    grid-template-rows:1fr 1fr 1fr;
    background-image: url(${props => props.imgurl});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    position:relative;
    cursor:pointer;
`;

const NestMask = styled.div`
    width:100%;
    height:100%;
    background:linear-gradient(to bottom, transparent 50%, #000);
    opacity:0.2;
    position:absolute;
    top:0;
    left:0;
`;

const NestElText = styled.div`
    grid-row:3/4;
    position:relative;
    z-index:2;
`;

const NestName = styled.p`
    margin:0;
    font-size:0.75rem;
    font-weight:bold;
    color:#fff;
    text-align:center;
    margin-bottom: 5px;
`;

const NestMember = styled.p`
    margin:0;
    color:#fff;
    font-size:0.5rem;
    text-align:center;
`;

const NestRecommend = styled.img`
    display:block;
    width:23%;
    position:absolute;
    top:-7%;
    left:-5%;

    @media screen and (min-width: 480px) {
        width:18%;
    }
`;

export default NestEl;