import React from 'react';
import styled from 'styled-components';

const langActivityProfit = {
    ko:{
        text:"총 수입",
        al:"알",
        exchange:"환전횟수",
        time:"회"
    }
}
function ActivityProfit (props) {
    const profitText = langActivityProfit.ko.text;
    const al = langActivityProfit.ko.al;
    const exchange = langActivityProfit.ko.exchange;
    const time = langActivityProfit.ko.time;

    return (
        <Profit>
            <Wrap><Updown>{profitText}</Updown><Time><span>{props.Pro}</span> {al}</Time></Wrap>
            <Wrap><Updown>{exchange}</Updown><Time><span>{props.ex}</span>{time}</Time></Wrap>
        </Profit>
    )
}
const Wrap = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:90%;
`;
const Profit = styled.div`
    font-size:13px;
    color:#707070;
    font-weight:bold;
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content: center;
`;

const Updown = styled.div `
    height:50%; line-height:30.5px;
    flex-basis:40%;
    text-align:left;
    margin-left:20px;

    @media all and (min-width:400px){
        margin-left:30px;
        text-align:center;
    }

    @media all and (min-width:800px){
        margin-left:50px;
    }
`;
const Time = styled.div`
    flex-basis:60%;
    text-align:right;
`;


export default ActivityProfit;