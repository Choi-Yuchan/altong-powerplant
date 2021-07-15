import React from 'react';
import styled from 'styled-components';
import ActivityPage from '../routes/ActivityPage';
import ActivityTitle from '../components/activity/ActivityTitle';
import ActivityTotal from '../components/activity/ActivityTotal';
import ActivityAlogPage from '../routes/ActivityAlogPage';
import ActivityNestPage from '../routes/ActivityNestPage';
import { Route } from 'react-router-dom';
import Num3Comma from '../components/function/Num3Comma';
import { useTranslation } from 'react-i18next';

const langActivity = {
    ko:{
        id:["Vivien"],
        question:["4069"],
        answer:["1030"],
        grossProfit:["1000000"],
        exchangeTime:["3"],
        answerProfit:["876520"],
        alogProfit:["79882"],
        nestProfit:['43598'],
    }
}

function Activity ({match}) {
    const { t } = useTranslation();
    const getID = langActivity.ko.id;
    const question = Num3Comma(langActivity.ko.question);
    const answer = Num3Comma(langActivity.ko.answer);
    const levelUp = t("ascension");
    const answerProfit = Num3Comma(langActivity.ko.answerProfit);
    const alogProfit = Num3Comma(langActivity.ko.alogProfit);
    const grossProfit = Num3Comma(langActivity.ko.grossProfit);
    const exchangeTime = Num3Comma(langActivity.ko.exchangeTime);
    const nestProfit = Num3Comma(langActivity.ko.nestProfit);

    return (
        <Active>
            <ActivityTitle 
            id = {getID} 
            question = {question}
            answer = {answer}
            levelUp = {levelUp}
            />
            <ActivityTotal
            match = {match}
            gprofit = {grossProfit}
            ansprofit = {answerProfit}
            alogprofit = {alogProfit}
            nestprofit = {nestProfit}
            exchange ={exchangeTime}
            />
            <Route exact path={`${match.path}`} component={ActivityPage}/>
            <Route path = {`${match.path}/alog`} component={ActivityAlogPage}/>
            <Route onClick = {(e) => {e.preventDefault(); e.stopPropagation();}}
            path = {`${match.path}/nest`} component={ActivityNestPage}/>
        </Active>
    );
};

const Active = styled.div`
    width:100%;
    height:60vh;
    font-family:'Noto Sans KR', sans-serif;
`;

export default Activity;