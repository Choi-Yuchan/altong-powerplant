import React from 'react';
import styled from 'styled-components';
import AlogContents from './ContentElements/AlogContents';

function AlogContent () {
    return (
        <AlogCon>
            <AlogContents title="우리 언제 만날 수 있을까? 정답을 알려줘" writer="흰둥이" shadow={true} sticker={true} circle="blue" backgrounds='#f3f311'/>
            <AlogContents title="우리 날 수 있을까? 정답을 알려줘" writer="빨둥이" shadow={false} sticker={false} circle="white" backgrounds='#000'/>
            <AlogContents title="우리 만날 수 있을까? 정답을 알려줘" writer="파둥이" shadow={true} sticker={false} circle="black" backgrounds='#111fff'/>
            <AlogContents title="우리 볼 수 있을까? 정답을 알려줘" writer="초둥이" shadow={false} sticker={true} circle="green" backgrounds='#131d1f'/>
        </AlogCon>
    );
};

const AlogCon = styled.div`
    width:324px;
    height:356px;
    margin:0 auto;
    background-color:#fff;
    display:flex;
    justify-content:space-between;
    align-content:space-between;
    flex-wrap:wrap;
    margin-bottom: 1.5rem;
    
    @media all and (min-width:650px){
        width:90%;
        flex-wrap:nowrap;
        align-items:center;
    }

    @media all and (max-width:360px){
        justify-content:space-evenly;;
        align-content:space-between;
    }
`;

export default AlogContent;