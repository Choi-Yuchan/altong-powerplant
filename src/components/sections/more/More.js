import styled from 'styled-components';


const MoreView = styled.a`
    width: 100%;
    font-size: 0.5rem;
    max-width: 90px;
    display: flex;
    background-color: #F5F5F5;
    flex-direction:column;
    margin:10px auto 50px;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    padding: 10px 2px;
    font-weight: bold;
    cursor: pointer;
    border-radius:5px;
    box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);

`;


function More() {
    return (
        <MoreView>
        자세히 보기
        </MoreView>
    
    );
};

export default More;