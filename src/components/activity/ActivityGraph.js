import React from 'react';
import styled from 'styled-components';
import MyChart from './chart/MyChart';

function ActivityGraph() {

    const data = [
        { 
            x: "훈훈알",
            y: 24,
            color: "#fd0031"
        },
        { 
            x: "질문", 
            y:3,
            color: "#fc6d89"
        },
        { 
            x: "답변", 
            y:23,
            color: "#ff9aad" 
        },
        { 
            x: "기타",
            y:50,
            color: "#f6bec9"
        }
    ];
    const data2 = [
        { 
            x: "감사알",
            y: 25,
            color: "#75BDF8"
        },
        { 
            x: "훈훈알(질문)", 
            y:48,
            color: "#98D0FB"
        },
        { 
            x: "훈훈알(답변)", 
            y:24,
            color: "#B8DFFF" 
        },
        { 
            x: "환전",
            y:3,
            color: "#DBEDFC"
        }
    ];

    return (
        <GraphDiv>
            <MyChart data={data} title={true}/>
            <MyChart data={data2} title={false} />
        </GraphDiv>
    );
}
const GraphDiv = styled.div`
    display:flex;
    width:100%;
    height: 18vh;
    margin:0 auto;
    justify-content:center;

    @media (min-width: 480px){
        width:85%;
        height: auto;
    }
`;



export default ActivityGraph;