import React from 'react';
import styled from 'styled-components';

const langActivityProfit = {
    ko:{
        text:"총수익",
        al:"알",
    }
}
function ActivityProfit (props) {
    const profitText = langActivityProfit.ko.text;
    const al = langActivityProfit.ko.al;

    return (
        <Profit>
            <Updown>{profitText}</Updown>
            <Updown><span>{props.Pro}</span> {al}</Updown>
        </Profit>
    )
}

const Profit = styled.div`
    font-size:15px;
    color:#707070;
    font-weight:bold;
    text-align:center;
    width:50%; height:61px;
    line-height:61px;
    display:flex;
    flex-direction:column;
`;

const Updown = styled.div `
    height:50%; line-height:30.5px;
`;


export default ActivityProfit;