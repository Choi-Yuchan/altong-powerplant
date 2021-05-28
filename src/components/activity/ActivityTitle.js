import React from 'react';
import styled from 'styled-components';

const langActivityTitle = {
    ko:{
        //고정
        titleText:"님의 통계",
        queRank:"질문",
        ansRank:"답변",
        wu:"위",
    }
}
function ActivityTitle ({id, question, answer}) {
    const titleText = langActivityTitle.ko.titleText;
    const queRank = langActivityTitle.ko.queRank;
    const ansRank = langActivityTitle.ko.ansRank;
    const wu = langActivityTitle.ko.wu;

    return (
        <TitleOption>
            <IDContainer>
                <span>{ id }</span>{titleText}
            </IDContainer>
            <Rank>
                <span>{queRank} <span>{ question }</span>{wu}</span>
                <Rank2>{ansRank} <span>{ answer}</span>{wu}</Rank2>
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