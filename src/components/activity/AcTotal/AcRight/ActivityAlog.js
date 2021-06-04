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
            <AnswerL push = {props.push} onClick={ () => { props.setPush(2)}}>{text}</AnswerL>
            <AnswerR push = {props.push} onClick={ () => { props.setPush(2)}}><Highlight>{ props.Rep }</Highlight> {al}</AnswerR>
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
    color:${ props => props.push === 2 ? "#fd0031" : "#707070" };
    font-weight:bold;
    text-align:center;
    flex-basis:45%;
    margin-left:15px;
    background-color:${ props => props.push === 2 ? "#fefefe" : "#fefefe" };
    border-radius: 10px;
    box-shadow:${ props => props.push === 2 ? "rgba(0, 0, 0, 0.3) 3px 3px 10px inset" : "none" };
`;

const AnswerR = styled.div`
    font-size:12px;
    color:#707070;
    font-weight:bold;
    text-align:right;
    margin-right:10px;
    flex-basis:55%;

    @media all and (min-width:400px){
        margin-right:30px;
    }
    @media all and (min-width:650px){
        margin-right:45px;
    }
`;

const Highlight = styled.span`
    color: #fd0031;
`;

export default ActivityAlog;