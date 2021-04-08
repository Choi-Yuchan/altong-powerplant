import React from 'react';
import styled from 'styled-components';
import AlogPic from './AlogPic';
import AlogSticker from './AlogSticker';
import AlogWord from './AlogWord';
import AlogBack from './AlogBack';

function AlogConOptionIn (props) {
    return (
        <AlogConOptionIn1>
            <AlogSticker sticker={props.sticker}></AlogSticker>
            <AlogWord title={props.title}></AlogWord>
            <AlogBack writer={props.writer} backgrounds={props.backgrounds}></AlogBack>
            <AlogPic circle={props.circle}></AlogPic>
        </AlogConOptionIn1>
    );
};

const AlogConOptionIn1 = styled.div`
    width:95%;
    height:95%;
    background:pink;
    position:relative;
    border-radius:5px;
`;

export default AlogConOptionIn;