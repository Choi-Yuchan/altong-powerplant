import React from 'react';
import styled from 'styled-components';

function AlogPic (props) {
    return (
        <AlogPic1 circle={props.circle}>
            
        </AlogPic1>
    );
};

const AlogPic1 = styled.div `
    width:33px;
    height:33px;
    border-radius:50%;
    background: ${ (props) => props.circle };
    position:absolute;
    left:50%; top:35%;
    transform:translateX(-50%);
    z-index:100;

    @media all and (min-width:650px){
       top:38%;
    }

`;


export default AlogPic;