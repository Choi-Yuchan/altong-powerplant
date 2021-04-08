import React from 'react';
import styled from 'styled-components';

function ActivityConR (props) {

    return (
        <ConR>
            {props.subject.count}{props.subject.gun} {props.subject.title2} {props.subject.number}
        </ConR>
    );
};

const ConR = styled.div`
    width:60%; height:100%;
    text-align:center;
    color:#707070;
    padding:1rem 0.2rem; 
    font-size:0.75rem;

    @media (min-width: 360px){
        padding:1rem;
    }
`;

export default ActivityConR;