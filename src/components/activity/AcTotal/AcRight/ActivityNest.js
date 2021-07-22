import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ActivityNest (props) {
    return (
        <Answer to="/activity/nest">
            <AnswerL push = {props.push} onClick={ () => { props.setPush(3)}}>NEST</AnswerL>
            <AnswerR push = {props.push} onClick={ () => { props.setPush(3)}}>{ props.Nes } 알</AnswerR>
        </Answer>
    )
}

const Answer = styled(Link)`
    text-decoration:none;
    width:100%; height:50%;
    line-height:31px;
    display:none;
`;

const AnswerL = styled.div`
    font-size:12px;
    color:${ props => props.push === 3 ? "#fd0031" : "#707070" };
    font-weight:bold;
    text-align:center;
    margin-left:10px;
    flex-basis:45%;
    background-color:${ props => props.push === 3 ? "#fefefe" : "#fefefe" };
    border-radius: 10px;
    box-shadow:${ props => props.push === 3 ? "rgba(0, 0, 0, 0.3) 3px 3px 10px inset" : "none" };

`;

const AnswerR = styled.div`
    font-size:12px;
    color:#707070;
    font-weight:bold;
    text-align:right;
    margin-right:5px;
    flex-basis:55%;
    box-sizing:border-box;

    @media all and (min-width:400px){
        margin-right:30px;
    }
    @media all and (min-width:650px){
        margin-right:45px;
    }
`;

export default ActivityNest;