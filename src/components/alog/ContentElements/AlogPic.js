import React from 'react';
import styled from 'styled-components';

function AlogPic (props) {
    return (
        <AlogPic1 circle={process.env.PUBLIC_URL + '/images/' + props.circle}></AlogPic1>
    );
};

const AlogPic1 = styled.div `
    width:33px;
    height:33px;
    border-radius:50%;
    background-image:url(${props => props.circle});
    background-position: center center;
    background-size: cover;
    position:absolute;
    left:50%; top:35%;
    transform:translateX(-50%);
    z-index:100;

    @media all and (min-width:650px){
       top:38%;
    }
    @media all and (min-width:800px){
       width:70px; height:70px;
       top:31%;
    }

`;


export default AlogPic;