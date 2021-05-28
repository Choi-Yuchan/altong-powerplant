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
    width: 100px;
    height:30px;

    align-items:center;
    justify-content:space-around;
    background-color:#F5F5F5;
    border-radius:5px;
    box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);    
`;

const DropdownBox = styled.ul`
    width: 100px; height:30px;
    background-color:#F5F5F5;
    font-size:0.75rem;
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
    justify-content:center;
    background-color:#F5F5F5;
    padding: 0.625rem 1rem;

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

const langTitle = {
    ko:{
        droplist: ["조회순","최신순","훈훈알순","감사알순"],
    }
}

function Title(props) {
    const [isShow, setShow] = useState(false);
    const showMenu = (e) => {
        e.preventDefault();
        setShow(!isShow);
    }

    const droplist = langTitle.ko.droplist;

    const [name, changeName] = useState(0);

    return (
        <TopDiv>
            <Top>
                <Left>{props.title}</Left>
                {/* 해당 항목을 선택하면 그 항목이 선택된 것으로 보여야 합니다.*/}
                <Right onClick={showMenu}>
                    {isShow ? 
                    <DropdownBox>
                        <DropList onClick={ ()=>{ changeName(0); } }>{droplist[0]}</DropList>
                        <DropList onClick={ ()=>{ changeName(1); } }>{droplist[1]}</DropList>
                        <DropList onClick={ ()=>{ changeName(2); } }>{droplist[2]}</DropList>
                        <DropList onClick={ ()=>{ changeName(3); } }>{droplist[3]}</DropList>
                    </DropdownBox> : 
                    <ShowBox>
                        <TabContent name = {name} droplist = { droplist }/>
                    </ShowBox>
                    }
                </Right>
          </Top>
      </TopDiv>
    );
};

function TabContent(props){
    if (props.name === 0){
      return <DropList>{props.droplist[0]}<Triangle/></DropList>
    } else if (props.name === 1){
      return <DropList>{props.droplist[1]}<Triangle/></DropList>
    } else if (props.name === 2){
      return <DropList>{props.droplist[2]}<Triangle/></DropList>
    } else if (props.name === 3){ 
      return <DropList>{props.droplist[3]}<Triangle/></DropList>
    } else { 
        return <DropList>{props.droplist[0]}<Triangle/></DropList>
      }
}

export default Title;