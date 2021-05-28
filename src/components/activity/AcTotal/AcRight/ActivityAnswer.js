import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const langActivityAnswer = {
    ko:{
        //고정
        text:"질문 / 답변",
        al:"알"
    }
}

function ActivityAnswer (props) {
    const text = langActivityAnswer.ko.text;
    const al = langActivityAnswer.ko.al;

    return (
        <Answer to="/activity">
            <AnswerL>{text}</AnswerL>
            <AnswerR><Highlight>{ props.Ans }</Highlight> {al}</AnswerR>
        </Answer>
    )
}

const Answer = styled(Link)`
    text-decoration:none;
    width:100%; height:50%;
    line-height:31px;
    display:flex;
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
    box-sizing:border-box;
`;

const Highlight = styled.span`
    color: #fd0031;
`;

export default ActivityAnswer;