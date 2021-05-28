import React from 'react';
import styled from 'styled-components';
import AlogPic from './AlogPic';
import AlogSticker from './AlogSticker';
import AlogWord from './AlogWord';
import AlogBack from './AlogBack';
import AlogBottom from './AlogBottom';

function AlogConOptionIn (props) {
    return (
        <AlogConOptionIn1>
            <AlogSticker sticker={props.sticker}></AlogSticker>
            <AlogWord title={props.title}></AlogWord>
            <AlogBack writer={props.writer} background={props.background} backgroundColor={props.backgroundColor}></AlogBack>
            <AlogPic circle={props.circle}></AlogPic>
            <AlogBottom></AlogBottom>
        </AlogConOptionIn1>
    );
};

const AlogConOptionIn1 = styled.div`
    width:95%;
    height:80%;
    position:relative;
    border-radius:5px;
`;

export default AlogConOptionIn;