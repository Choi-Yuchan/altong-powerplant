import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const langActivityAlog = {
    ko:{
        //고정
        text:"ALOG",
        al:"알",
    }
}

function ActivityAlog (props) {
    const text=langActivityAlog.ko.text;
    const al=langActivityAlog.ko.al;

    return (
        <Answer to="/activity/alog">
            <AnswerL>{text}</AnswerL>
            <AnswerR><Highlight>{ props.Rep }</Highlight> {al}</AnswerR>
        </Answer>
    )
}

const Answer = styled(Link)`
    text-decoration:none;
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