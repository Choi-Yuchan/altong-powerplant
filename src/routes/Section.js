import Box from '../components/sections/Box';
import Title from '../components/sections/Title';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const langSection = {
        con1 : [
            {
                value:"100",
                big:"지구는 왜 둥글까요?",
                sub:"둥글면 얼마나 둥근가요?",
                hour:"3",
                look:"1000",
                answer:"10",
                hun:"100000"
            },
            {
                value:"1000",
                big:"인구는 왜 둥글까요? 인구는 왜 둥글까요?",
                sub:"얼마나 안둥글면 얼마나 둥근가요?",
                hour:"30",
                look:"110",
                answer:"20",
                hun:"10100"
            },
            {
                value:"1500",
                big:"인구는 왜 둥글까요? 인구는 왜 둥글까요?",
                sub:"얼마나 안둥글면 얼마나 둥근가요?",
                hour:"30",
                look:"2110",
                answer:"20",
                hun:"6000"
            },
            {
                value:"1020",
                big:"인구는 왜 둥글까요?",
                sub:"얼마나 안둥글면 얼마나 둥근가요?",
                hour:"30",
                look:"1010",
                answer:"20",
                hun:"8784"
            },
            {
                value:"1700",
                big:"인구는 왜 둥글까요?",
                sub:"얼마나 안둥글면 얼마나 둥근가요?",
                hour:"30",
                look:"1100",
                answer:"20",
                hun:"45465"
            }
        ],
        con2 : [
            {
                value:"300",
                big:"당구는 왜 둥글까요?",
                sub:"안둥글면 얼마나 둥근가요?",
                hour:"23",
                look:"30",
                answer:"1/2",

                hun:"10000"

            },
            {
                value:"400",
                big:"축구는 왜 둥글까요?",
                sub:"둥글둥글면 얼마나 둥근가요?",
                hour:"13",
                look:"20",
                answer:"1/4",

                hun:"30000"

            }
        ],
};

function Section () {
    const { t } = useTranslation();
    
    const con1 = langSection.con1;
    const con2 = langSection.con2;

    const [view, setView] = useState(0);

    return(
        <>
            <Title title = {t("question")} setView={setView} con={con1}/>
            { con1.length === 0 || con1.length === 1 
                ?
                <>
                {
                con1.map(con1 => {
                    return <Box con={ con1 } key = {con1.value} time={t("checkTime")}></Box>
                    })
                }
                <BoxDiv>
                    <QBox>작성된 질문이 없습니다.</QBox>
                </BoxDiv>
                </>
                :
                <Frame>
                {con1.map(con1 => {
                    return <Box con={ con1 } key = {con1.value} time={t("checkTime")}></Box>
                    })
                }
                </Frame>
            }
            <More to="/">{t("moreBtn")}</More>
            <Title title = {t("answer")} setView={setView} con={con2}/>
            { con2.length === 0 || con2.length === 1 ?
                <>
                    {con2.map(con2 => {
                        return <Box con={ con2 } key={ con2.value }time={t("checkTime")} ></Box>
                        })
                    }
                    <BoxDiv>
                        <QBox>작성하신 답변이 없습니다.</QBox>
                    </BoxDiv>
                </>
                :
                <Frame>
                {con2.map(con2 => {
                return <Box con={ con2 } key={con2.value} time={t("checkTime")}></Box>}
                )}
                </Frame>
            }
            <More to="/">{t("moreBtn")}</More>
        </>
    );
};

const Frame = styled.div`
    height:257px; width:100%;
    overflow:hidden; 
    display:flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: center;

    @media all and (max-width:350px){
        height:270px;
    }
    `;
const More = styled(Link)`
    width: 100%;
    text-decoration:none;
    font-size: 0.625rem;
    max-width: 90px;
    display: flex;
    background-color: #F5F5F5;
    margin:1rem auto 50px;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    padding: 10px 2px;
    font-weight: bold;
    cursor: pointer;
    border-radius:5px;
    box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);
    :active {
        outline:none;
        box-shadow:4px 4px 10px 0 rgba(0, 0, 0, 0.1), 
        -4px -4px 10px rgba(255, 255, 255, 0.7), 
        4px 4px 10px 0 rgba(0, 0, 0, 0.1) inset,
        -4px -4px 10px rgba(255,255,255,0.7) inset;
    }
`;
const BoxDiv = styled(Link)`
  width: 90%; height:114px;
  max-width: 800px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  margin-top: 10px;
  text-decoration:none;

  :active {
        outline:none;
        box-shadow:4px 4px 10px 0 rgba(0, 0, 0, 0.1), 
        -4px -4px 10px rgba(255, 255, 255, 0.7), 
        4px 4px 10px 0 rgba(0, 0, 0, 0.1) inset,
        -4px -4px 10px rgba(255,255,255,0.7) inset;
    }
`;

const QBox = styled.div`
  display:flex; 
  padding: 15px 20px;
  width: 100%; height:114px;
  box-sizing: border-box;
  background-color:#FAFAFA;
  -webkit-tap-highlight-color: transparent;
  margin: 0 auto;
  color: #333;
  align-items:center;
  justify-content: space-around;
  border-radius:5px;
  box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);
  color:#707070;
  font-weight: bold;
  font-size:1rem;
`;

export default Section;