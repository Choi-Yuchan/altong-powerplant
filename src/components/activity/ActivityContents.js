import React from 'react';
import styled from 'styled-components';


function ActivityContents ({contents}) {

    return (
        contents.map(function(contents){
            return(
                <Total key={contents.id}>
                    <ActivityConL>
                        {contents.title }
                    </ActivityConL>
                    <Line></Line>
                    <ActivityConR>
                        {contents.count}
                        {contents.gun}
                        {contents.title2}
                        {contents.number}
                    </ActivityConR>
                </Total>
            )
        })
    );   
};

const Total = styled.div`
    width:95%;
    background:#fafafa;
    margin:14px auto 0;
    border-radius:5px;
    box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);
    display:flex;
    position:relative;
    font-weight:bold;
    
    @media all and (min-width:500px){
        width:85%;
    }
`;

const Line = styled.div`
    width:1px; height:30%;
    background:#707070;
    position:absolute;
    left:40%; top:50%;
    transform:translateY(-50%);
`;
const ActivityConL = styled.div`
     width:40%; height:100%;
     padding:1rem 0.2rem; 
     text-align:center;
     color:#707070; 
     font-size:0.75rem;

     
    @media (min-width: 360px){
        padding:1rem;
    }
`;

const ActivityConR = styled(ActivityConL)`
    width:60%;
`;

export default ActivityContents;