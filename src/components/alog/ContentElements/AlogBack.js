import React from 'react';
import styled from 'styled-components';

function AlogBack (props) {
    return (
        <AlogBack1 backgrounds={props.backgrounds}>
            <By writer={props.writer}></By>
        </AlogBack1>
    );
};
const AlogBack1 = styled.div `
    width:100%;
    height:55%;
    background: ${ (props) => props.backgrounds };
    border-radius:0 0 5px 5px;
    padding-top:22px;
    box-sizing:border-box;
`;

let writer = "흰둥이";

function By (props) {
    return(
        <Write>by <span>{ props.writer }</span></Write>
    )
}

const Write = styled.p `
    font-size:6px;
    text-align:center;
    color:#fff;
`;
export default AlogBack;

