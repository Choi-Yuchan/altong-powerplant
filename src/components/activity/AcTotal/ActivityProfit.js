import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

function ActivityProfit (props) {
    const { t } = useTranslation();
    const profitText = t("totalRevenue");
    const al = t("al");
    const exchange = t("exchange");
    const time = t("times");

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
    color:#707070;
    font-weight:bold;
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content: center;
`;

const Updown = styled.p `
    padding: 0.5em 0;
    height:50%; 
    flex-basis:40%;
    text-align:left;
    margin-left:20px;
    font-size: 0.5rem;

    @media all and (min-width:400px){
        font-size: 0.75rem;
        padding: 0.625em 0;
        margin-left:30px;
        text-align:center;
    }

    @media all and (min-width:760px){
        margin-left:50px;
    }
`;
const Time = styled.p`
    flex-basis:60%;
    text-align:right;
    font-size: 0.5rem;

    @media (min-width: 400px){
        font-size: 0.75rem;
    }
`;


export default ActivityProfit;