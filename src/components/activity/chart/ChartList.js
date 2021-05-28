import React from 'react';
import styled from 'styled-components';

function ChartList(props) {
    return (
        <ChartListDiv>
            <ChartListColor bgColor={props.data.color}></ChartListColor>
            <ChartListName>{props.data.x} {props.data.y}%</ChartListName>
            {/* <ChartListNumber></ChartListNumber> */}
        </ChartListDiv>
    );
}

const ChartListDiv = styled.div`
    display:flex;
    align-items:center;
    margin:2px;
    flex-wrap: wrap;

    @media (min-width: 480px){
        margin-bottom: 0.625rem;
    }


`;

const ChartListColor = styled.span`
    width:10px;
    height:10px;
    background: ${props => props.bgColor};
    vertical-align:middle;
    margin-right:5px;
`;

const ChartListName = styled.span`
    font-size:0.2em;
    letter-spacing:-0.5px;
    width:55px;
    @media (min-width:360px){
        font-size: 0.5em;
        width:auto;
    }
`;
// const ChartListNumber = styled.span`
//     display:block;
//     font-size:0.5rem;
//     letter-spacing:-0.5px;
//     margin-left:2px;
// `;

export default ChartList;