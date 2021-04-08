import React from 'react';
import styled from 'styled-components';

function ActivityConL (props) {
    return (
        <ConL>
            { props.subject.title }
        </ConL>
    );
};

const ConL = styled.div`
     width:40%; height:100%;
     padding:1rem 0.2rem; 
     text-align:center;
     color:#707070; 
     font-size:0.75rem;

     
    @media (min-width: 360px){
        padding:1rem;
    }
`;

export default ActivityConL;