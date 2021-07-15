import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

function Title(props) {
    const { t } = useTranslation();
    const [isShow, setShow] = useState(false);
    const showMenu = (e) => {
        e.preventDefault();
        setShow(!isShow);
    }

    const droplist = t("dropList");

    function sortLook1 (){ 
        props.con.sort(function(a, b){
        return b.look - a.look;
    });
    }
    function sortValue1 (){ 
        props.con.sort(function(a, b){
        return b.value - a.value;
    });
    }
    function sortHun1 (){ 
        props.con.sort(function(a, b){
        return b.hun - a.hun;
    });
    }
    function sortHour1 (){ 
        props.con.sort(function(a, b){
        return b.hour - a.hour;
    });
    }

    const [name, changeName] = useState(0);

    return (
        <TopDiv>
            <Top>
                <Left>{props.title}</Left>
                {/* 해당 항목을 선택하면 그 항목이 선택된 것으로 보여야 합니다.*/}
                <Right onClick={showMenu}>
                    {isShow ? 
                    <DropdownBox>
                        <DropList onClick={ ()=>{ changeName(0); props.setView(0); sortLook1();} }>{droplist[0]}</DropList>
                        <DropList onClick={ ()=>{ changeName(1); props.setView(1); sortHour1();} }>{droplist[1]}</DropList>
                        <DropList onClick={ ()=>{ changeName(2); props.setView(2); sortHun1();} }>{droplist[2]}</DropList>
                        <DropList onClick={ ()=>{ changeName(3); props.setView(3); sortValue1();} }>{droplist[3]}</DropList>
                    </DropdownBox> : 
                    <ShowBox>
                        <TabContent name = { name } droplist = { droplist }/>
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
    font-size:${props => props.long ? "0.5rem" : "0.75rem"};
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
        color: #fefefe;
    }
    :nth-child(3),:nth-child(4){
        font-size: 0.5rem;
    }
`;

const Triangle = styled.div`
    margin-left:5px;
    border: 7px solid transparent;
    border-bottom-width:0;
    border-top-color:#FE607E;
`;