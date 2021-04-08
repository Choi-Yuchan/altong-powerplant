import React from 'react';
import styled from 'styled-components';
import ActivityAnswer from './AcRight/ActivityAnswer';
import ActivityNest from './AcRight/ActivityNest';
import ActivityAlog from './AcRight/ActivityAlog';

function ActivityRight (props) {
    return (
        <Right>
            <ActivityAnswer Ans={props.Ans} ></ActivityAnswer>
            <ActivityAlog Rep={props.Rep}></ActivityAlog>
            <ActivityNest Nes={props.Nes}></ActivityNest>
        </Right>
    )
}

const Right = styled.div`
    font-size:12px;
    font-weight:bold;
    text-align:center;
    width:50%; height:100%;
    display:flex;
    flex-direction:column;
`;

export default ActivityRight;