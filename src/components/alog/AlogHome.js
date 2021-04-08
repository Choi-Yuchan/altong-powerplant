import React from 'react';
import styled from 'styled-components';

function AlogHome () {
    return (
            <Option>알로그 홈으로 바로가기</Option>
    );
};

const Option = styled.a `
    color:#707070;
    font-size:0.5rem;
    float:right;
    margin-bottom:1rem;
    margin-right:5vw;
    cursor:pointer;
`;
export default AlogHome;