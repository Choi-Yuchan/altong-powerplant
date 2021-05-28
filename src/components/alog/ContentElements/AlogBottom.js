import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function AlogBottom() {

    const [show, setShow] = useState(true);

    return (
       <>
            <ListActive>
                <ListTime>14분전</ListTime>
                <ListCheck><ListCheckIcon src={process.env.PUBLIC_URL + '/images/icon_view.svg'}></ListCheckIcon></ListCheck>
                <ListReply><ListReplyIcon src={process.env.PUBLIC_URL + '/images/icon_reply.svg'}></ListReplyIcon></ListReply>
            </ListActive>
            <Language show={ show } src={ show ? process.env.PUBLIC_URL + '/images/language.svg' : process.env.PUBLIC_URL + '/images/language_on.svg'} 
                    onClick={ 
                        (e) => {
                            e.preventDefault();
                            setShow(!show);
                        }
                    }>
            </Language>
        </>
    );
}

const ListActive = styled.div`
    width:100%;
    border-top:1px solid transparent;
    background-color:#ffffff;
    display:flex;
    flex-direction: row;
    align-items: center;
    position:relative;
    z-index:3;
    padding: 0.3125rem 0;
`;
const ListTime = styled.span`
    font-size:0.625rem;
    color:#707070;
    margin-left:5px;
`;
const ListCheck = styled.span`
    font-size:0.625rem;
    color:#707070;
    margin-left: 0.625rem;
`;
const ListCheckIcon = styled.img`
    width:0.5625rem;
`;
const ListReply = styled.span`
    font-size:0.625rem;
    color:#707070;
    margin-left: 0.625rem;
`;
const ListReplyIcon = styled.img`
    width:0.625rem;
    margin-bottom:-2px;
    margin-right:0.1875rem;
`;

const Language = styled.img`
    width:20px; height:20px;
    position:absolute;
    right:5px; top:5px;
    cursor:pointer;
    z-index:4;
`;

export default AlogBottom;