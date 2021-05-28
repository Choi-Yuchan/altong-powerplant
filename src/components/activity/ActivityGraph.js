import React from 'react';
import styled from 'styled-components';
import MyChart from './chart/MyChart';

function ActivityGraph({ revenue, expense}) {
    return (
        <GraphDiv>
            <MyChart data={revenue} title={true}/>
            <MyChart data={expense} title={false} />
        </GraphDiv>
    );
}
const GraphDiv = styled.div`
    display:flex;
    width:100%;
    margin:0 auto;
    justify-content:center;

    @media (min-width: 480px){
        width:85%;
        height: auto;
    }
`;



export default ActivityGraph;