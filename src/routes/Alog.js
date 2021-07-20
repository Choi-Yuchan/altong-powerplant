/* eslint-disable */
import styled from 'styled-components';
import React from 'react';
import AlogTitle from '../components/alog/AlogTitle';
import AlogContent from '../components/alog/AlogContent';
import AlogContentDefault from '../components/alog/AlogContentDefault';
import AlogContentDefault2 from '../components/alog/AlogContentDefault2';
import { useTranslation } from 'react-i18next';

const langAlog = {
        id: [ "Vivien"],
        contents:[
            {
            id: 1,
            title:"우리 언제 만날 수 있을까? 정답을 알려줘",
            writer:"흰둥이",
            shadow: false,
            circle:"profile01.jpg",
            sticker:false,
            background:"ad_12.jpg",
            backgroundColor:"",
            url:"http://www.naver.com"
            },
            {
            id: 2,
            title:"우리 날 수 있을까? 정답을 알려줘",
            writer:"빨둥이",
            shadow: false,
            circle:"profile04.jpg",
            sticker:false,
            background:"ad_1.jpg",
            backgroundColor:"red",
            url:"http://www.naver.com"
            }
        ],
        contents2:[
        {
            id: 3,
            title:"우리 언제 만날 수 있을까? 정답을 알려줘",
            writer:"흰둥이",
            shadow: true,
            circle:"profile02.jpg",
            sticker:false,
            background:"ad_4.jpg",
            backgroundColor:"blue",
            url:"http://www.naver.com"
        },
        {
            id: 4,
            title:"우리 날 수 있을까? 정답을 알려줘",
            writer:"빨둥이",
            shadow: true,
            circle:"profile03.jpg",
            sticker:true,
            background:"ad_5.jpg",
            backgroundColor:"#333",
            url:"http://www.naver.com"
        }
    
    ]
}
function Alog () {
    const { t } = useTranslation();
    const id = langAlog.id;
    const contents = langAlog.contents;
    const contents2 = langAlog.contents2;
    const userAlog = t("userAlog");
    const userDalog = t("userDalog");
    const userContent = t("ownContents");
    const scrapContent = t("scrapContents");
    const shortCut = t("shortcutToUser");

    return (
        <>
        <AlogOp>
            <AlogTitle 
            id={id} 
            subText={userAlog} 
            userShortCut={userContent}
            />
            { contents.length === 0 ? 
            <AlogBox>
                <AlogContentDefault></AlogContentDefault>
            </AlogBox>
            :
            <AlogBox className="albox" count={contents.length}>
            {
                contents.map( (content) => {
                    return <AlogContent
                        key={content.id} 
                        title={content.title} 
                        writer={content.writer} 
                        shadow={content.shadow}
                        sticker={content.sticker}
                        circle={content.circle}
                        background={content.background}
                        backgroundColor={content.backgroundColor}
                        url={content.url}
                        />
                } )
            }
            </AlogBox>
            }
            <AlogTitle 
            id={id} 
            subText={userDalog} 
            userShortCut={scrapContent}
            />
            { contents2.length === 1 ? 
            <AlogBox2>
                <AlogContentDefault2></AlogContentDefault2>
                {
                contents2.map( (content) => {
                    return <AlogContent
                        key={content.id} 
                        title={content.title} 
                        writer={content.writer} 
                        shadow={content.shadow}
                        sticker={content.sticker}
                        circle={content.circle}
                        background={content.background}
                        backgroundColor={content.backgroundColor}
                        url={content.url}
                        />
                    })
                }
            </AlogBox2> 
            :
            <AlogBox2 className="albox" >
                {
                contents2.map((content) => {
                return <AlogContent
                    key={content.id} 
                    title={content.title} 
                    writer={content.writer} 
                    shadow={content.shadow}
                    sticker={content.sticker}
                    circle={content.circle}
                    background={content.background}
                    backgroundColor={content.backgroundColor}
                    url={content.url}
                    />
                })
                }
            </AlogBox2>
            }
        </AlogOp>
        <Option href="/">{id}{shortCut}</Option>
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
    width:80%;
    margin:0 auto;

    @media (min-width: 480px){
        justify-content: space-around;
    }
`;
const AlogBox2 = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    flex-wrap: wrap;
    width:80%;
    margin:0 auto;

    @media (min-width: 480px){
        justify-content: space-around;
    }
`;

const Option = styled.a`
    text-decoration: none;
    margin:10px auto 20px;
    padding: 0.625rem 0.875rem;
    text-align:center;
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
