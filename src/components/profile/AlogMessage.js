/* eslint-disable */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

function AlogMessage ({close, setClose, userData}) {

    const { t } = useTranslation();
    const nickName = userData[0].id;
    const toSendingMessage = t("toSendingMessage");
    const sendBtn = t("send");
    const cancelBtn = t("cancel");
    const enterMessage = t("enterMessage");
    const completeSending = t("completeSending");

    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    const sendMessage = () => {
        if (message === '') {
            alert(enterMessage);
        } else {
            alert(completeSending);
            setMessage('');
            setClose(false);
        }
    }

    return (
        close &&
        <MessageBox onClick={()=>{setClose(false)}}>
            <Frame onClick={(e)=>{e.stopPropagation();}}>
                <Title><span>{nickName}</span>{toSendingMessage}</Title>
                <Form action="#">
                    <TxtArea value={message} onChange={(e)=>{handleChange(e)}}/>
                </Form>
                <ButtonFrame>
                    <Cancel onClick={ () => { setClose(false) } }>{cancelBtn}</Cancel>
                    <Send onClick={()=>{sendMessage(); }}>{sendBtn}</Send>
                </ButtonFrame>
            </Frame>
        </MessageBox>
    )
};

const MessageBox = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:9999;
`;
const Title = styled.div`
    width:80%; height:20px;
    font-size:1em;
    line-height:20px;
    color:#707070;
    text-align:center;
    margin:0 auto 20px;
    font-weight:bold;

    span {
        color:#eb639d;
    }
`;

const TxtArea = styled.textarea`
    border: 1px solid #d2d2d2;
    width: 97%;
    font-weight: 500;
    padding: 5px;
    border-radius: 3px;
    resize: none;
    height: 180px;
    outline: none;
`;

const Form = styled.form`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const Frame = styled.div`
    background: #fff;
    width: 80%;
    max-width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding: 15px;
    border:1px solid #707070;
    z-index:9999;
`;

const ButtonFrame = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    text-align:center;
    margin-top:10px;
`;

const Send = styled.div`
    border:1px solid #fd0031;
    border-radius:25px;
    width:40%;
    cursor:pointer;
    padding:5px 0;
    color:#fd0031;
    font-size:0.875rem;
`;
const Cancel = styled.div`
    border:1px solid #707070;
    border-radius:25px;
    width:40%;
    cursor:pointer;
    padding:5px 0;
    font-size:0.875rem;
`;

export default AlogMessage;