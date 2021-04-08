import React from 'react';
import styled from 'styled-components';

const VisitorContainer = styled.div`
    display: flex;
`;

const Today = styled.p`
    font-size: 0.625rem;
    font-weight: bold;
    color: #707070;
    padding-right: 1rem;
`;
const Total = styled.p`
    font-size: 0.625rem;
    font-weight: bold;
    color: #707070;
    padding-left: 1rem;
`;
const Partition = styled.span`
    color:#707070;
`;

const VisitorBox = (props) => {
    return(
        <VisitorContainer>
            <Today>Today {props.today}</Today>
            <Partition>l</Partition>
            <Total>Total {props.total}</Total>
        </VisitorContainer>
    );
}

export default VisitorBox;