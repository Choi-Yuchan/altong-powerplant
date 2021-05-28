import React from 'react';
import styled from 'styled-components';
import ChartList from './ChartList';

function ChartData(props) {
    return (
        <ChartDataBox>
            {props.data.map((dataEl, i) => (
                <ChartList data={dataEl} key={i} />
            ))}
        </ChartDataBox>
    );
}

const ChartDataBox = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

export default ChartData;