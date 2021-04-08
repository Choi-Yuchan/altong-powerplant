import React from 'react';
import styled from 'styled-components';
import ActivityConL from './ActivityCon/ActivityConL';
import ActivityConR from './ActivityCon/ActivityConR';

function ActivityThanks () {

    const subject = [
        {
            id: 1,
            title: "감사알 지급 답변",
            count: "313",
            gun: "건 /",
            title2: "감사알 지급율",
            number: "20.3%"
        },
        {
            id: 2,
            title: "채택된 답변",
            count: "578",
            gun: "건 /",
            title2: "답변 채택율",
            number: "78.6%"
        },
        {
            id: 3,
            title: "추천수익",
            count: "142,857.9",
            gun: "",
            title2: "알",
            number: ""
        }
    ];

    return (
        subject.map(function(contents){
            return(
                <Total key={contents.id}>
                    <ActivityConL subject={contents}></ActivityConL>
                    <Line></Line>
                    <ActivityConR subject={contents}></ActivityConR>
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


export default ActivityThanks;