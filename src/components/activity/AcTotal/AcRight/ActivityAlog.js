import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ActivityAlog ({match, Rep, push, setPush}) {
    const { t } = useTranslation();
    const text = t("listTitle");
    const al = t("al");

    return (
        <Answer to={`${match.path}/alog`}>
            <AnswerL push = {push} onClick={ () => { setPush(2)}}>{text[1]}</AnswerL>
            <AnswerR push = {push} onClick={ () => { setPush(2)}}>{ Rep }{al}</AnswerR>
        </Answer>
    )
}

const Answer = styled(Link)`
    text-decoration:none;
    width:100%; 
    height:50%;
    padding: 0.5em 0;
    display:flex;
    align-items: center;
`;

const AnswerL = styled.p`
    font-size: 0.5rem;
    color:${ props => props.push === 2 ? "#fd0031" : "#707070" };
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    flex-basis: 45%;
    padding: 0.625em 0.5rem;
    margin-left: 7px;
    background-color:${ props => props.push === 2 ? "#fefefe" : "#fefefe" };
    border-radius: 10px;
    box-shadow:${ props => props.push === 2 ? "rgba(0, 0, 0, 0.3) 3px 3px 10px inset" : "none" };

    @media (min-width:480px){
        font-size: 0.75rem;
        margin-left: 15px;
    }
`;

const AnswerR = styled.p`
    font-size: 0.5rem;
    color:#707070;
    font-weight:bold;
    text-align:right;
    margin-right:10px;
    flex-basis:55%;

    @media all and (min-width:480px){
        font-size: 0.75rem;
        margin-right:30px;
    }
    @media all and (min-width:640px){
        margin-right:45px;
    }
`;

export default ActivityAlog;