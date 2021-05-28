import React from 'react';
import styled from 'styled-components';

function ShowSticker(props){
    if(props.sticker === true){
        return <AlogSticker1 src={process.env.PUBLIC_URL + '/images/recommend01.png'}></AlogSticker1>
    }
    return <></>
    
}

function AlogSticker (props) {
    return (
        <ShowSticker sticker={props.sticker} ></ShowSticker>
    );
};

const AlogSticker1 = styled.img`
    width:43px;
    height:43px;
    position:absolute;
    left:-6px; top:-23px; 
    z-index:100;

    @media all and (min-width:800px){
        width:60px;
        height:60px;
        position:absolute;
        left:-15px; top:-40px; 
        z-index:100; 
    }
`;

export default AlogSticker;