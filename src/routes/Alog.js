/* eslint-disable */
import styled from 'styled-components';
import React, { useState } from 'react';
import AlogTitle from '../components/alog/AlogTitle';
import AlogHome from '../components/alog/AlogHome';
import AlogContent from '../components/alog/AlogContent';


function Alog () {

    return (
        <AlogOp>
            <AlogTitle></AlogTitle>
            <AlogContent></AlogContent>
            <AlogHome></AlogHome>
        </AlogOp>
    );
};

const AlogOp = styled.div`
    width:100%;
    font-family:'Noto Sans KR', sans-serif;

    @media all and (min-width:800px){
        width:800px;
        margin:0 auto;
    }
`;
export default Alog;
