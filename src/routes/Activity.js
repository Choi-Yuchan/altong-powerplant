import React from 'react';
import styled from 'styled-components';
import ActivityPage from '../routes/ActivityPage';
import ActivityTitle from '../components/activity/ActivityTitle';
import ActivityTotal from '../components/activity/ActivityTotal';
import ActivityAlogPage from '../routes/ActivityAlogPage';
import ActivityNestPage from '../routes/ActivityNestPage';
import { Route } from 'react-router-dom';

const langActivity = {
    ko:{
        id:["Vivien"],
        question:["4,069"],
        answer:["1,030"],
        grossProfit:["1,000,000"],
        answerProfit:["876,520"],
        alogProfit:["79,882"],
        nestProfit:['43,598'],
    }
}

function Activity () {
    const getID = langActivity.ko.id;
    const question = langActivity.ko.question;
    const answer = langActivity.ko.answer;
    const grossProfit = langActivity.ko.grossProfit;
    const answerProfit = langActivity.ko.answerProfit;
    const alogProfit = langActivity.ko.alogProfit;
    const nestProfit = langActivity.ko.nestProfit;

    return (
        <Active>
            <ActivityTitle 
            id = {getID} 
            question = {question}
            answer = {answer}
            />
            <ActivityTotal
            gprofit = {grossProfit}
            ansprofit = {answerProfit}
            alogprofit = {alogProfit}
            nestprofit = {nestProfit}
            />
            <Route exact path="/activity" component={ActivityPage}></Route>
            <Route path = "/activity/alog" component={ActivityAlogPage}></Route>
            <Route onClick = {(e) => {e.preventDefault(); e.stopPropagation();}
            }path = "/activity/nest" component={ActivityNestPage}></Route>
        </Active>
    );
};

const Active = styled.div`
    width:100%;
    height:60vh;
    font-family:'Noto Sans KR', sans-serif;
`;

export default Activity;