import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { VictoryPie } from "victory";
import ChartData from './ChartData';

function MyChart(props) {
    const { t } = useTranslation();

    return (
        <ChartDiv>
            <ChartBox>
                <VictoryPie 
                    colorScale={props.data.map( (data) => data.color )}
                    innerRadius={70}
                    labelRadius={100}
                    startAngle={60}
                    endAngle={420}
                    data={props.data}
                    style={{ labels: {fontSize:0, fill: "transparent"}}}
                />    
                <ChartLabel>{props.title===true ? `${t("income")}`:`${t("expenses")}`}</ChartLabel>
            </ChartBox>
            <ChartData data={props.data}></ChartData>
        </ChartDiv>
    );
}

const ChartDiv = styled.div`
    width:50%;
    display:flex;
`;
const ChartBox = styled.div`
    width:50%;
    height:100%;
    position:relative;
`;

const ChartLabel = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    margin:0;
    font-size:0.5rem;
    font-weight:bold;
    color:#707070;
`;



export default MyChart;