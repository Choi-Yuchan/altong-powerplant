import React from 'react';
import styled from 'styled-components';

function ActivityNest (props) {
    return (
        <Answer>
            <ActivityAnswerL></ActivityAnswerL>
            <ActivityAnswerR Nes={props.Nes}></ActivityAnswerR>
        </Answer>
    )
}

function ActivityAnswerL () {
    return (
        <AnswerL>NEST</AnswerL>
    )
}

function ActivityAnswerR (props) {
    return (
        <AnswerR><Highlight>{ props.Nes }</Highlight> 알</AnswerR>
    )
}

const Answer = styled.div`
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

export default ActivityNest;