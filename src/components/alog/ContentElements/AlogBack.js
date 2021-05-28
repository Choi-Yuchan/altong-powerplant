import React from 'react';
import styled from 'styled-components';

function AlogBack (props) {
    return (
        <AlogBack1 background={process.env.PUBLIC_URL + '/images/' + props.background} backgroundColor={props.backgroundColor}>
            <By writer={props.writer}></By>
        </AlogBack1>
    );
};
const AlogBack1 = styled.div `
    width:100%;
    height:56%;
    background-color:${props => props.backgroundColor};
    background-image:url(${props => props.background});
    background-position: center center;
    background-size: cover;
    padding-top:22px;
    box-sizing:border-box;

    @media all and (max-width:490px) {
        height:54%;
    }
    @media all and (min-width:800px) {
        padding-top:52px;
    }
`;


function By (props) {
    return(
        <Write>by <span>{ props.writer }</span></Write>
    )
}

const Write = styled.p `
    font-size:6px;
    text-align:center;
    color:#fff;

    @media all and (min-width:800px){
        font-size:1rem;
    }
`;
export default AlogBack;

