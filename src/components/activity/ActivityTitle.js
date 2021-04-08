import React, { useState } from 'react';
import styled from 'styled-components';

function ActivityTitle () {

    const [id,id변경] = useState('Vivien');
    const 질문 = '4,069';
    const 답변 = '1,000';

    return (
        <TitleOption>
            <IDContainer>
                <span>{ id }</span>님의 통계
            </IDContainer>
            <Rank>
                <span>질문 <span>{ 질문 }</span>위</span>
                <Rank2>답변 <span>{ 답변 }</span>위</Rank2>
            </Rank>
        </TitleOption>
    );
};

const TitleOption = styled.div`
    display:flex;
    justify-content:space-between;
    font-weight:bold;
    font-size:0.75rem;
    margin:1.25rem 2rem;
    padding:0 1.25rem;
    color:#707070;
    @media (max-width:480px){
        margin:1rem;
        padding:0;
    }    
`;
const IDContainer = styled.div`
`;
const Rank = styled.div`
    font-size:0.5rem;
    font-weight:normal;
    float:right;

    @media all and (max-width:500px){
    }
`;

const Rank2 = styled.span`
    margin-left:10px;
`;

export default ActivityTitle;