import React from 'react';
import styled from 'styled-components';

function AlogWord (props) {
    return (
        <AlogWord1>
            <AlogSentence title={props.title}></AlogSentence>
        </AlogWord1>
    );
};

const AlogWord1 = styled.div `
    width:100%;
    height:45%;
    background:#fff;
    padding-top:20px;
    box-sizing:border-box;
    border-radius:5px 5px 0 0 ;
`;

let 인생 = "내 인생의 잊지 못할 그 곳들 저는 김인구입니다";

function AlogSentence (props) {
    return(
        <Title>{ props.title }</Title>
       )
}

const Title = styled.div `
    width:70%; height:24px;
    margin:0 auto;
    font-size:12px;
    text-align:center;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:normal;
    display:-webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    z-index:101;

    @media all and (min-width:650px){
       margin: 10px auto 0%; 
    }
`;
export default AlogWord;