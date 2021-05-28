import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function AlogTitle ({id, subText, userShortCut, shortCut, direct}) {

    return (
        <AlogHeader>
            <TitleOption>
                <span>{ id }</span>{subText}
                <Direct>{userShortCut}</Direct>
            </TitleOption>
        </AlogHeader>
    );
};

const AlogHeader = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:1.5rem 0;
`;
const TitleOption = styled.div`
    font-weight:bold;
    font-size:0.875rem;
    margin-left:1rem;
    color:#707070;
`;

const Direct = styled(Link) `
    text-decoration:none;
    color:#707070;
    font-size:0.5rem;
    margin-left:10px;
    font-weight:normal;
    cursor:auto;
`;

export default AlogTitle;