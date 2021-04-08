import { useState } from 'react';
import styled from 'styled-components';

const TopDiv = styled.div`
    width: 90%;
    max-width: 800px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    margin-top: 20px;
`;

const Top = styled.div`
    display:flex;
    width:100%;
    justify-content: space-between;
`;

const Left = styled.h3`
    color:#707070;
    font-weight:bold;
    font-size: 0.875rem;
`;

const Right = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-around;
    background-color:#F5F5F5;
    border-radius:5px;
    box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);    
`;

const DropdownBox = styled.ul`
    height:30px;
    background-color:#F5F5F5;
    font-size:0.625rem;
    font-weight:bold;
    border:none;
    z-index:2;
    box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);
`;

const ShowBox = styled(DropdownBox)`
    height: auto;
`;

const DropList = styled.li`
    display:flex;
    align-items:center;
    background-color:#F5F5F5;
    padding: 0.625rem 1rem;
    font-size:0.625rem;
    font-weight:bold;
    :hover{
        background-color:#bebebe;
    }
`;

const Triangle = styled.div`
    margin-left:5px;
    border: 7px solid transparent;
    border-bottom-width:0;
    border-top-color:#FE607E;
`;


function Title(props) {
    const [isShow, setShow] = useState(false);
    const showMenu = (e) => {
        e.preventDefault();
        setShow(!isShow);
    }

    return (
        <TopDiv>
            <Top>
                <Left>{props.title}</Left>
                <Right onClick={showMenu}>
                    {isShow ? 
                    <DropdownBox>
                        <DropList>조회순</DropList>
                        <DropList>최신순</DropList>
                        <DropList>훈훈알순</DropList>
                        <DropList>감사알순</DropList>
                    </DropdownBox> : 
                    <ShowBox>
                        <DropList>조회순<Triangle/></DropList>
                    </ShowBox>
                    }
                </Right>
          </Top>
      </TopDiv>
    );
};

export default Title;