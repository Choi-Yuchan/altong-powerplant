import React from 'react';
import styled from 'styled-components';
import ActivityProfit from './AcTotal/ActivityProfit';
import ActivityRight from './AcTotal/ActivityRight';

function ActivityTotal () {

    const Pro = "1,000,000";
    const Ans = "8,000";
    const Rep = "80,000";

    return (
        <Total>
            <ActivityProfit Pro={Pro}></ActivityProfit>
            <Line></Line>
            <ActivityRight Ans={Ans} Rep={Rep}></ActivityRight>
        </Total>
    );
};

const Total = styled.div`
    width:95%;
    background:#fafafa;
    margin:0 auto;
    border-radius:5px;
    box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);
    display:flex;
    position:relative;

    @media all and (min-width:500px){
        width:85%;
        margin:0 auto;
    }
`;

const Line = styled.div`
    width:1px; height:30%;
    background:#707070;
    position:absolute;
    left:50%; top:50%;
    transform:translateY(-50%);
`;

export default ActivityTotal;