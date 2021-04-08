import React, { useState } from 'react';
import styled from 'styled-components';

function AlogTitle () {

    const [id,id변경] = useState('Vivien');

    return (
        <TitleOption>
            <span>{ id }</span>님의 알로그
            <Direct>바로가기</Direct>
        </TitleOption>
    );
};

const TitleOption = styled.div`
    font-weight:bold;
    font-size:0.75rem;
    line-height:57px;
    margin-left:1rem;
    color:#707070;
`;

const Direct = styled.a `
    font-size:0.5rem;
    margin-left:10px;
    font-weight:normal;
    cursor:pointer;
`;

export default AlogTitle;