import React from 'react';
import styled from 'styled-components';
import AlogContents from './ContentElements/AlogContents';


function AlogContentDefault () {
    
    return (
        <AlogCon>
            <Word>보유중인<br></br>알로그가<br></br>없습니다.</Word>
        </AlogCon>
    );
};

const AlogCon = styled.div`
    width:100px;
    height:180px;
    background:#f1f1f1;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);
    border-radius:5px;
    transition:all 0.3s;
    cursor:pointer;

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

const Word = styled.p`
    text-align: center;
    font-size: 1rem;
    color:#707070;

    @media (min-width:480px){
        font-size: 1rem;
    }

    @media (min-width:600px){
        font-size: 1.3rem;
    }
    @media (min-width:800px){
        font-size: 1.5rem;
    }
`;

export default AlogContentDefault;