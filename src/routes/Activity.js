import React from 'react';
import styled from 'styled-components';
import ActivityTitle from '../components/activity/ActivityTitle';
import ActivityTotal from '../components/activity/ActivityTotal';
import ActivityGraph from '../components/activity/ActivityGraph';
import ActivityDivide from '../components/activity/ActivityDivide';
import ActivityThanks from '../components/activity/ActivityContents';

function Activity () {
    return (
        <Active>
            <ActivityTitle></ActivityTitle>
            <ActivityTotal></ActivityTotal>
            <ActivityGraph></ActivityGraph>
            <ActivityDivide></ActivityDivide>
            <ActivityThanks></ActivityThanks>
        </Active>
    );
};

const Active = styled.div`
    width:100%;
    height:60vh;
    font-family:'Noto Sans KR', sans-serif;
`;

export default Activity;