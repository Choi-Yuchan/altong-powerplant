/* eslint-disable */
import styled from 'styled-components';
import React from 'react';
import AlogTitle from '../components/alog/AlogTitle';
import AlogContent from '../components/alog/AlogContent';
import AlogContentDefault from '../components/alog/AlogContentDefault';
import AlogContentDefault2 from '../components/alog/AlogContentDefault2';

const langAlog = {
    ko:{
        id: [ "Vivien"],
        contents:[
            // {
            // title:"우리 언제 만날 수 있을까? 정답을 알려줘",
            // writer:"흰둥이",
            // shadow: false,
            // circle:"profile01.jpg",
            // sticker:false,
            // background:"ad_12.jpg",
            // backgroundColor:"",
            // },
            // {
            // title:"우리 날 수 있을까? 정답을 알려줘",
            // writer:"빨둥이",
            // shadow: false,
            // circle:"profile04.jpg",
            // sticker:false,
            // background:"ad_1.jpg",
            // backgroundColor:"red",
            // }
        ],
        contents2:[
        // {
        //     title:"우리 언제 만날 수 있을까? 정답을 알려줘",
        //     writer:"흰둥이",
        //     shadow: true,
        //     circle:"profile02.jpg",
        //     sticker:false,
        //     background:"ad_4.jpg",
        //     backgroundColor:"blue",
        // },
        {
            title:"우리 날 수 있을까? 정답을 알려줘",
            writer:"빨둥이",
            shadow: true,
            circle:"profile03.jpg",
            sticker:true,
            background:"ad_5.jpg",
            backgroundColor:"#333",
        }
    
    ],
        //고정
        subtitleText: "님의 알로그",
        subtitleText2: "님의 달로그",
        userShortCut: "유저 자체 제작 컨텐츠",
        userShortCut2: "타 유저 스크랩 컨텐츠",
        shortCut2: "알록달록 바로가기",
    }
}
function Alog () {
    const id = langAlog.ko.id;
    const contents = langAlog.ko.contents;
    const contents2 = langAlog.ko.contents2;
    const subtitleText = langAlog.ko.subtitleText;
    const subtitleText2 = langAlog.ko.subtitleText2;
    const userShortCut = langAlog.ko.userShortCut;
    const userShortCut2 = langAlog.ko.userShortCut2;
    const shortCut2 = langAlog.ko.shortCut2;
    const direct = langAlog.ko.direct;

    return (
        <>
        <AlogOp>
            <AlogTitle 
            id={id} 
            subText={subtitleText} 
            userShortCut={userShortCut}
            />
            { contents.length === 0
            ? 
            <AlogBox>
                <AlogContentDefault></AlogContentDefault>
            </AlogBox>
            :
            <AlogBox className="albox" count={contents.length}>
            {
                contents.map( (content) => {
                    return <AlogContent 
                        title={content.title} 
                        writer={content.writer} 
                        shadow={content.shadow}
                        sticker={content.sticker}
                        circle={content.circle}
                        background={content.background}
                        backgroundColor={content.backgroundColor}
                        />
                } )
            }
            </AlogBox>
            }
            <AlogTitle 
            id={id} 
            subText={subtitleText2} 
            userShortCut={userShortCut2}
            />
            { contents2.length === 1 
            ? 
            <AlogBox2>
                <AlogContentDefault2></AlogContentDefault2>
                {
                contents2.map( (content) => {
                    return <AlogContent 
                        title={content.title} 
                        writer={content.writer} 
                        shadow={content.shadow}
                        sticker={content.sticker}
                        circle={content.circle}
                        background={content.background}
                        backgroundColor={content.backgroundColor}
                        />
                } )
            }
            </AlogBox2> 
            :
            <AlogBox2 className="albox" >
            {
                contents2.map( (content) => {
                    return <AlogContent 
                        title={content.title} 
                        writer={content.writer} 
                        shadow={content.shadow}
                        sticker={content.sticker}
                        circle={content.circle}
                        background={content.background}
                        backgroundColor={content.backgroundColor}
                        />
                } )
            }
            </AlogBox2>
            }
        </AlogOp>
        <Option To="/">{id}님의 {shortCut2}</Option>
        </>
    );
};

const AlogOp = styled.div`
    width:100%;
    font-family:'Noto Sans KR', sans-serif;
    display:flex;
    flex-flow:row wrap;
`;

const AlogBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    width:70%;
    margin:0 auto;
`;
const AlogBox2 = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    flex-wrap: wrap;
    width:70%;
    margin:0 auto;
`;

const Option = styled.div `
    margin:10px auto 20px;
    width:auto; height:30px;
    text-align:center;
    line-height:30px;
    box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);
    border-radius:5px;
    cursor:pointer;
    font-size:0.625rem;
    color:#707070;


    @media all and (min-width:800px) {
        font-size:0.8rem;
    }

    :active {
        outline:none;
        box-shadow:4px 4px 10px 0 rgba(0, 0, 0, 0.1), 
        -4px -4px 10px rgba(255, 255, 255, 0.7), 
        4px 4px 10px 0 rgba(0, 0, 0, 0.1) inset,
        -4px -4px 10px rgba(255,255,255,0.7) inset;
    }
`;
export default Alog;
