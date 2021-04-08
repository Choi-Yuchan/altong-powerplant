import React, { useState } from 'react';
import styled from 'styled-components';

const BoxDiv = styled.section`
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  margin-top: 10px;
`;

const QBox = styled.div`
  display:flex;
  padding: 15px 20px;
  width: 100%;
  box-sizing: border-box;
  background-color:#FAFAFA;
  -webkit-tap-highlight-color: transparent;
  margin: 0 auto;
  color: #333;
  align-items:center;
  justify-content: space-around;
  border-radius:5px;
  box-shadow:4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.7);
`;

const Txt = styled.div`
  display:flex;
  width:80%;
  flex-direction:column;
`;

const QMark = styled.p`
  font-weight:bold;
  font-size:1.875rem;
  color: #fd0031;
`;

const YellowBox = styled.div`
  display: flex;
  font-size: 0.75rem;
  height:3px;
  align-items:center;
  padding: 0.75rem;
  margin-left: 0.625rem;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #FFEE75;
  font-weight: bold;
  
  @media (max-width:340px){
    padding:0.625rem;
    margin-left:0.5rem;
  }
`;

const Question = styled.p`
  display:flex;
  font-size: 0.75rem;
  font-weight: bold;
  margin-left: 1rem;
  box-sizing: border-box;
  text-overflow: ellipsis;
  @media (max-width:340px){
    margin-left:0.5rem;
  }
`;

const Global = styled.img`
  display:flex;
  align-items: center;
  padding: 5px 5px;
  box-sizing: border-box;
  width:100%;
`;

const TxtTop = styled.div`
  display:flex;
  align-items:center;
`;

const TxtMid = styled.div`
  display:flex;
  margin:0.75rem 0 0.875rem;
  font-size: 0.75rem;
  font-weight:600;
  color:#707070;
`;

const TxtBtm = styled.div`
  display:flex;
  font-size:0.625rem;
  color:#707070;
`;


const Time =styled.div`
  display:flex;
  margin-right: 1rem;
`;

const View =styled.img`
  display:flex;
  margin-right: 0.25em;
`;

const Egg =styled.p`
  display:block;
  margin-left:1rem;
  margin-right:0.25em;
  border: 0.7px solid #888;
  border-radius:50%;
  width:10px;
  height:10px;
  text-align:center;
`;

const GlobalBox = styled.div`
  width:40px;
`;


function Box(props) {
  const [show, setShow] = useState(true);

  return (
    <BoxDiv>
        <QBox>
          <Txt>
            <TxtTop>
              <QMark>Q</QMark>
              <YellowBox>
               {props.con.yellow}
              </YellowBox>
              <Question>
                {props.con.big}
              </Question>
            </TxtTop>
            <TxtMid>
              {props.con.sub}
            </TxtMid>
            <TxtBtm>
              <Time>
                {props.con.hour}시간 전
              </Time>
              <View src={process.env.PUBLIC_URL + '/images/icon_view.svg'}/>
              {props.con.look}
              <Egg>A</Egg>
              {props.con.hun}
            </TxtBtm>
          </Txt>
          <GlobalBox onClick={() => setShow(!show) } >
            <ShowS show={show} src={process.env.PUBLIC_URL + '/images/language.svg'} />
          </GlobalBox>
        </QBox>
    </BoxDiv>
  );
};

function ShowS(props){
        if(props.show === true){
            return <Global src={process.env.PUBLIC_URL + '/images/language.svg'}></Global>
        }
        return <Global src={process.env.PUBLIC_URL + '/images/language_on.svg'}></Global>
}


export default Box;
