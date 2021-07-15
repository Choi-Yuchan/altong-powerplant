import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

function ActivityTitle ({id, question, answer, levelUp}) {
    const { t } = useTranslation(); 
    const titleText = t("userStatus");
    const queRank = t("question");
    const ansRank = t("answer");
    const ranking = t("rank");

    return (
        <TitleOption>
            <IDContainer>
                <span>{ id }</span>{titleText}
            </IDContainer>
            <Wrap>
            <Rank>
                <span>{queRank} <span>{ question }</span>{ranking}</span>
                <Rank2>{ansRank} <span>{ answer}</span>{ranking}</Rank2>
            </Rank>
            {/* 클릭 시 해당 계정의 승천정보로 이동 */}
            <LevelUpInfo href="http://altong.com">
                {levelUp}
            </LevelUpInfo>
            </Wrap>
        </TitleOption>
    );
};

const Wrap = styled.div`
    text-align:right;
`;
const LevelUpInfo = styled.a`
    padding: 5px 8px;
    text-align:center;
    border-radius: 10px;
    background:#fafafa;
    margin-left:10px;
    display:inline-block;
    color:#707070;
    text-decoration: none;
    box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);
    cursor: pointer;
`;
const TitleOption = styled.div`
    max-width:690px;
    display:flex;
    flex-direction: column;
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
    width:100%;
    display: block;
    margin-bottom:10px;
`;
const Rank = styled.div`
    font-size:0.5rem;
    font-weight:normal;
    display:inline-block;

    @media all and (max-width:500px){
    }
`;

const Rank2 = styled.span`
    margin-left:10px;
`;

export default ActivityTitle;