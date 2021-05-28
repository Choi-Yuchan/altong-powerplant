import styled from 'styled-components';

const TopHeader = styled.div`
    height: 100%;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
const CenterDiv = styled.div`
    height: 100%;
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-size: 1rem;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    color: #333;
`;
const MainHeaderAhref = styled.a`
    display: block;
    float: left;
    width: 60px;
    height: 60px;
    position: relative;
    text-decoration: none;
    color: #333;

    @media (max-width:480px){
        width: 45px;
        height: 45px;
    }
`;
const HamburgerDiv = styled.div`
    width: 30px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;
const HamburgerDivIFirst = styled.i`
    margin-top: 0;
    display: block;
    width: 100%;
    height: 2px;
    background: #666;
`;
const HamburgerDivISecond = styled.i`
    width: 70%;
    display: block;
    height: 2px;
    background: #666;
    margin-top: 9px;
`;
const HamburgerDivILast = styled.i`
    display: block;
    width: 100%;
    height: 2px;
    background: #666;
    margin-top: 9px;
`;
const HamburgerSpan = styled.span`
    display: block;
    width: 6px;
    height: 6px;
    background: #FD0031;
    border-radius: 50%;
    position: absolute;
    top: 9px;
    right: 0;
    cursor: pointer;
    color: #333;
    font-size: 16px;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
`;
const LogoH1 = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

`;
const LogoImg = styled.img`
    cursor: pointer;
    height: 52px;
    @media (max-width:480px){
        height: 37px;
    }
`;
const CenterDivContents = styled.header`
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;
    z-index: 9;
    transition: all 0.5s;
    background: #fff;

    @media (max-width:480px){
        height: 45px;
    }
`;

const ColumnDiv = styled.div`
    width: 78px;
    height: 30px;
    position: absolute;
    top: 50%;
    right: 38px;
    transform: translateY(-50%);
`;
const SearchBox = styled.div`
&{
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    width: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}
&:after{
    content: "";
    display: block;
    width: 1px;
    height: 24px;
    position: absolute;
    top: 3px;
    right: 0;
    background-color: #C4C4C4;
}
`;
const SearchBoxInput = styled.input`
    display: block;
    padding: 5px;
    font-size: 14px;
    width: 200px;
    border: 0;
    border-bottom: 1px solid #ddd;
    outline: none;
    position: absolute;
    top: 50%;
    left: -200px;
    transform: translateY(-50%) scaleX(0);
    transform-origin: right center;
    transition: all 0.3s;
`;
const SearchBoxSubmit = styled.input`
    border: none;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    z-index: -1;
    font-family: "Noto Sans KR", "Noto Sans JP", "Noto Sans HK", "Noto Sans SC", "Noto Sans TC", sans-serif;
    outline: none;
`;
const SearchSpan = styled.span`
    display: block;
    width: 30px;
    cursor: pointer;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
const SearchImg = styled.img`
    display: block;
    width: 30px;
    cursor: pointer;
`;
const ColumnBoxPC = styled.p`
    width: 50%;
    padding: 5px;
    padding-top: 0;
    position: absolute;
    top: 0;
    right: -3px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
const ColumnBoxAhref = styled.a`
    text-decoration: none;
    color: #333;
    display: block;
`;
const TopcolumnBoxImg = styled.img`
    width: 100%;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
const ColumnBoxAhref2 = styled.a`
    width: 67%;
    position: absolute;
    left: 90%;
    top: 1px;
    display: block;
    text-decoration: none;
    color: #333;
`;
const TopcolumnBoxImg2 = styled.img`
    width: 100%;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

//윤주임이 제작한 TopNavi와 동일, 스타일만 일부 변경했습니다.

function TopNavi() {
    return (
    <CenterDivContents>
      <TopHeader>
          <CenterDiv>
            <MainHeaderAhref className="HamburgerBar">
                <HamburgerDiv>
                    <HamburgerDivIFirst></HamburgerDivIFirst>
                    <HamburgerDivISecond></HamburgerDivISecond>
                    <HamburgerDivILast></HamburgerDivILast>
                    <HamburgerSpan></HamburgerSpan>
                </HamburgerDiv>
            </MainHeaderAhref>
            <LogoH1 className="Logo">
                    <a href="http://www.altong.com/default/main">
                        <LogoImg src={process.env.PUBLIC_URL + '/images/logo3.png'} alt="로고"/>
                    </a>
            </LogoH1>
            <ColumnDiv>
                <SearchBox>
                    <form>
                        <SearchBoxInput placeholder="검색어를 입력해 주세요." type="text"></SearchBoxInput>
                        <SearchBoxSubmit type="submit"></SearchBoxSubmit>
                        <SearchSpan>
                            <SearchImg src={process.env.PUBLIC_URL + '/images/nicksearch.svg'}></SearchImg>
                        </SearchSpan>
                    </form>
                </SearchBox>
                <ColumnBoxPC>
                    <ColumnBoxAhref>
                        <TopcolumnBoxImg src={process.env.PUBLIC_URL + '/images/que_icon.svg'}></TopcolumnBoxImg>
                    </ColumnBoxAhref>
                    <ColumnBoxAhref2>
                        <TopcolumnBoxImg2 src={process.env.PUBLIC_URL + '/images/list_icon.svg'}></TopcolumnBoxImg2>
                    </ColumnBoxAhref2>
                </ColumnBoxPC>
            </ColumnDiv>
          </CenterDiv>
      </TopHeader>
      </CenterDivContents>
    );
  }
  export default TopNavi;