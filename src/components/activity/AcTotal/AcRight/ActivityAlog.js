import React from 'react';
import styled from 'styled-components';

function ActivityAlog (props) {
    return (
        <Answer>
            <ActivityAnswerL></ActivityAnswerL>
            <ActivityAnswerR Rep={props.Rep}></ActivityAnswerR>
        </Answer>
    )
}

function ActivityAnswerL () {
    return (
        <AnswerL>알로그</AnswerL>
    )
}

function ActivityAnswerR (props) {
    return (
        <AnswerR><Highlight>{ props.Rep }</Highlight> 알</AnswerR>
    )
}

const Answer = styled.div`
    width:100%; height:50%;
    display:flex;
    line-height:31px;
`;

const AnswerL = styled.div`
    font-size:12px;
    color:#707070;
    font-weight:bold;
    text-align:center;
    flex-basis:45%;
`;

const AnswerR = styled.div`
    font-size:12px;
    color:#707070;
    font-weight:bold;
    text-align:center;
    flex-basis:55%;
`;

const Highlight = styled.span`
    color: #fd0031;
`;

export default ActivityAlog;