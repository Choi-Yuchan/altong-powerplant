import React from 'react';
import styled from 'styled-components';
import Num3Comma from '../../function/Num3Comma';
import { useTranslation } from 'react-i18next';

const VisitorContainer = styled.div`
    display: flex;
    font-size:0.625rem;

    @media (min-width: 480px){
        font-size:0.75rem;
    }
`;
const Word = styled.p`
    font-weight: bold;
    color: #707070;
    padding-right: 0.7rem;
`;
const Today = styled.p`
    font-weight: bold;
    color: #707070;
    padding-right: 1rem;
`;
const Total = styled(Today)`
    padding-left: 1rem;
    padding-right:0;
`;

const Partition = styled.span`
    color:#707070;
`;

const VisitorBox = ({today, total}) => {
    const { t } = useTranslation();
    const todayCount = Num3Comma(today);
    const totalCount = Num3Comma(total);
    
    return(
        <VisitorContainer>
            <Word>{t("knowPlant")}</Word>
            <Today>Today {todayCount}</Today>
            <Partition>l</Partition>
            <Total>Total {totalCount}</Total>
        </VisitorContainer>
    );
}

export default VisitorBox;