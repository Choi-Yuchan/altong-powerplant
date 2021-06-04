import React, { useState } from 'react';
import styled from 'styled-components';
import ActivityAnswer from './AcRight/ActivityAnswer';
import ActivityNest from './AcRight/ActivityNest';
import ActivityAlog from './AcRight/ActivityAlog';

function ActivityRight (props) {

    const [push, setPush] = useState(1);

    return (
        <Right>
            <ActivityAnswer Ans={props.Ans} push = { push } setPush={setPush}></ActivityAnswer>
            <ActivityAlog Rep={props.Rep} push = { push } setPush={setPush}></ActivityAlog>
            <ActivityNest Nes={props.Nes} push = { push } setPush={setPush}></ActivityNest>
        </Right>
    )
}

const Right = styled.ul`
    font-size:0.75rem;
    font-weight:bold;
    text-align:center;
    width:50%; height:100%;
    display:flex;
    flex-direction:column;
`;

export default ActivityRight;