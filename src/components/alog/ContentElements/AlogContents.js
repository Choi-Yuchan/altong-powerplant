import React from 'react';
import styled from 'styled-components';

import AlogConOptionIn from './AlogConOptionIn';

function ShowShadow(props){
    if(props.shadow === true){
        return <Shadow href={props.href}></Shadow>
    }
    return <></>
    
}

function AlogContents (props) {
    return (
        <AlogConOption>
            <ShowShadow shadow={props.shadow} ></ShowShadow>
            <AlogConOptionIn title={props.title} writer={props.writer} circle={props.circle} sticker={props.sticker} background={props.background} backgroundColor={props.backgroundColor}/>
        </AlogConOption>
    );
};

const AlogConOption = styled.div`
    width:100px;
    height:180px;
    background:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);
    border-radius:5px;
    transition:all 0.3s;
    
    :active {
        outline:none;
        box-shadow:4px 4px 10px 0 rgba(0, 0, 0, 0.1), 
        -4px -4px 10px rgba(255, 255, 255, 0.7), 
        4px 4px 10px 0 rgba(0, 0, 0, 0.1) inset,
        -4px -4px 10px rgba(255,255,255,0.7) inset;
    }


    @media (min-width:400px){
        width:130px;
        height:220px;
    }
    @media (min-width:500px){
        width:160px;
        height:220px;
    }

    @media (min-width:600px){
        width:200px;
        height:240px;
    }
    @media (min-width:800px){
        width:250px;
        height:280px;
    }
`;

const Shadow = styled.a`
    width:100%; height:100%;
    background:rgba(0, 0, 0, .5);
    position:absolute;
    left:0; top:0;
    z-index:90;
    border-radius:5px;
    display:block;

    :active {
        outline:none;
        box-shadow:4px 4px 10px 0 rgba(0, 0, 0, 0.1), 
        -4px -4px 10px rgba(255, 255, 255, 0.7), 
        4px 4px 10px 0 rgba(0, 0, 0, 0.1) inset,
        -4px -4px 10px rgba(255,255,255,0.7) inset;
    }
`;

export default AlogContents;