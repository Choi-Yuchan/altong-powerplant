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
    left:-15px; top:-20px; 
    z-index:100;
`;

export default AlogSticker;