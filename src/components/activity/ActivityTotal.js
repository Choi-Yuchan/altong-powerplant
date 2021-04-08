import React from 'react';
import styled from 'styled-components';
import ActivityProfit from './AcTotal/ActivityProfit';
import ActivityRight from './AcTotal/ActivityRight';

function ActivityTotal () {

    const Pro = "1,000,000";
    const Ans = "876,520";
    const Rep = "79,882";
    const Nes = '43,598';

    return (
        <Total>
            <ActivityProfit Pro={Pro}></ActivityProfit>
            <Line></Line>
            <ActivityRight Ans={Ans} Rep={Rep} Nes={Nes}></ActivityRight>
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
    align-items:center;
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