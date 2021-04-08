import React from 'react';
import styled from 'styled-components';

function ActivityOpen (props) {
    return (
            <Open>
                <Op>열람</Op>
                <Line></Line>
                <Count><span>{props.Open}</span>건</Count>
            </Open>
    );
};

const Open = styled.div`
    width:48%;
    height:37px;
    background:#fafafa;
    font-weight:bold;
    color:#707070;
    border-radius:5px;
    font-size:12px;
    box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);
    display:flex;
    position:relative;
`;

const Op = styled.div`
    width:50%; height:100%;
    line-height:37px;
    text-align:center;
`;

const Count = styled.div`
    width:50%; height:100%;
    line-height:37px;
    text-align:center;
`;

const Line = styled.div`
    width:1px; height:30%;
    background:#707070;
    position:absolute;
    left:50%; top:50%;
    transform:translateY(-50%);
`;


export default ActivityOpen;