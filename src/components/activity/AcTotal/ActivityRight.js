import React from 'react';
import styled from 'styled-components';
import ActivityAnswer from './AcRight/ActivityAnswer';
import ActivityQuestion from './AcRight/ActivityQuestion';

function ActivityRight (props) {
    return (
        <Right>
            <ActivityAnswer Ans={props.Ans} ></ActivityAnswer>
            <ActivityQuestion Rep={props.Rep}></ActivityQuestion>
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