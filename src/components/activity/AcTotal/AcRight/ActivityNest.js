import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ActivityNest (props) {
    return (
        <Answer to="/activity/nest">
            <AnswerL>NEST</AnswerL>
            <AnswerR><Highlight>{ props.Nes }</Highlight> 알</AnswerR>
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