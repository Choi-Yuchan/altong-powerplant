import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Num3Comma from '../function/Num3Comma';    

function HunPopup(props) {
    const { t } = useTranslation();
    const giveWarmingAl = t("giveWarmingAl");
    const availableAl = t("availableAl");
    const huntext = availableAl.slice(0,15);
    const total = availableAl.slice(15,17);
    const hunhunal = Num3Comma(props.myAlmoney);
    const textEnd = availableAl.slice(17);
    const al = t("al"); 
    const cancel = t("cancel");
    const confirm = t("confirm");
    const warmingAlert = t("warmingAlert");

    //증정한 알머니 value 값
    const [presentAl, setPresentAl] = useState('');
    const onChange = (e) => {
        setPresentAl(e.target.value);
        if (e.target.value < 0) {
            setPresentAl(0);
        } else if (e.target.value > 10000) {
            setPresentAl(10000);
        }
    }
    // 훈훈알 증정 
    const sendHunAl = () => {
        if ( props.myAlmoney > 0) {
            props.setMyAlomoney(props.myAlmoney - presentAl);
        } else {
            alert(warmingAlert);
        }
    }
    return (
        props.hunAl &&
        <HunPopupWrap onClick={() => {props.setHunAl(false)}}>
            <HunPopupBox onClick={(e)=> {e.stopPropagation();}}>
                <HunTitle>{giveWarmingAl}</HunTitle>
                <HunText>{huntext}<br/>{total} <HunSpan>{hunhunal}</HunSpan>{textEnd}</HunText>
                <HunInputBox>
                    <HunInput type="number" placeholder="300~10,000" step="100" onChange={onChange} value={presentAl}></HunInput>
                    <HunInputSpan>{al}</HunInputSpan>
                </HunInputBox>
                <HunBtnBox>
                    <HunBtn onClick={()=>{props.setHunAl(false); setPresentAl('');}}>{cancel}</HunBtn>
                    <HunBtnR onClick={()=>{ sendHunAl(); setPresentAl(''); props.setHunAl(false); }}>{confirm}</HunBtnR>
                </HunBtnBox>
            </HunPopupBox>
        </HunPopupWrap>
    );
}

const HunPopupWrap = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,0.5);
    z-index:9999;
`;

const HunPopupBox = styled.div`
    z-index:9;
    background:#fefefe;
    border:0.5px solid #bebebe;
    width:90%;
    max-width:320px;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    border-radius:20px;
    padding:10px;
    box-sizing:border-box;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
`;
const HunTitle = styled.p`
    font-size:1rem;
    line-height:50px;
    border-bottom:1px solid #eee;
    text-align:center;
    font-weight:bold;
    color:#707070;
`;
const HunText = styled.p`
    font-size:14px;
    font-weight:500;
    text-align:center;
    color:#707070;
    margin-top:1rem;
    margin-bottom:1rem;
`;
const HunSpan = styled.span`
    font-weight:bold;
    color:#fd0031;
`;
const HunInputBox = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    margin-bottom:20px;
`;
const HunInput = styled.input`
    outline:none;
    border:0;
    border-bottom:1px solid #333;
    margin-right:10px;
    padding:6px 0;
    width:100px;
    font-weight:bold;
    text-align:center;
    font-size:14px;
​
    &::placeholder {
        color:#bbb;
        text-align:center;
    }
`;
const HunInputSpan = styled.span`
    font-size:14px;
    font-weight:bold;
    color:#707070;
`;
const HunBtnBox = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    margin-bottom:10px;
`;
const HunBtn = styled.button`
    outline:none;
    border:1px solid #666;
    border-radius:20px;
    background:#fff;
    color:#707070;
    font-size:14px;
    font-weight:bold;
    margin-right:20px;
    width:30%;
    cursor:pointer;
    padding:3px 0;
`;
const HunBtnR = styled.button`
    outline:none;
    border:1px solid #fd0031;
    border-radius:20px;
    background:#fff;
    color:#fd0031;
    font-size:14px;
    font-weight:bold;
    width:30%;
    cursor:pointer;
    padding:3px 0;
`;

export default HunPopup;








