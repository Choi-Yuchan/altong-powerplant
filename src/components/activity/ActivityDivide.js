import React from 'react';
import styled from 'styled-components';
import ActivityOpen from './AcDivide/ActivityOpen';
import ActivityReply from './AcDivide/ActivityReply';

function ActivityDivide () {
    const Open = "100";
    const Reply = "100";

    return (
        <Total>
            <ActivityOpen Open={Open}></ActivityOpen>
            <ActivityReply Reply={Reply}></ActivityReply>
        </Total>
    );
};

const Total = styled.div`
    width:95%;
    margin:0 auto;
    display:flex;
    justify-content:space-between;

    @media all and (min-width:500px){
        width:85%;
        margin:0 auto;
    }
`;
export default ActivityDivide;