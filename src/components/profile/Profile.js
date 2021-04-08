import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileImg from './profileimage/ProfileImg';
import VisitorBox from './visitorBox/VisitorBox';

const Section = styled.section`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin: 0.5rem 0;
`;

const ProfileBox = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: ${props => props.bgcolor};
    box-shadow: -3px -3px 6px #fff, 3px 3px 6px rgba(0,0,0,0.16);
    padding: 0.5rem 1.25rem 1.5rem 0.5rem;
    display:flex;
    flex-flow:column wrap;

    @media (max-width:480px){
        padding-bottom:0.75rem;
    }
`;
const ProfileTop = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-between;
`;

const ProfileMid = styled.div`
    width: 100%;
    height: 70%;
    display:flex;
    align-items:center;
    padding: 0.5em 1rem;

    @media (max-width:480px){
        padding:0;
    }
`;

const ProfileBot = styled.div`
    width: 100%;
    display:flex;
    justify-content:flex-end;
`;

const EditIcon = styled.img`
    cursor: pointer;
`;

const ContentsBox = styled.div`
    width:80%;
    @media (max-width:480px){
        width: 75%;
        padding: 0.5rem;
    }
`;
const Grade = styled.div`
    padding: 0.25em 1em;
    text-align: center;
    color: #fd0031;
    font-size: 0.5rem;
    border-radius: 15px;
    border: 1px solid #fd0031;
    max-width: fit-content;
    margin-bottom:3px;
`;

const UserBox =  styled.div`
    display:flex;
    align-items:center;
    padding-top:0.5em;
`;
const UserCountry =styled.img`
    width: 20px;
    height: 13px;
`;
const UserID = styled.h5`
    padding: 0 0.5em;
    font-size: 1rem;
    font-weight: bold;
    color: #707070;
    line-height: 1.3125;
    @media (min-width:480px){
        font-size: 1.25rem;
    }
`;


const UserIntro = styled.p`
    padding:0.5rem 0; 
    font-size: 0.625rem;
    line-height: 1.5;
    color: #707070;

    @media (min-width:480px){
        font-size:0.875rem;
    }
`;

const IconBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Icon = styled.img`
    cursor: pointer;
    width: 22px;
    height: 22px;
    &:not(:last-child) {
        margin-right: 1rem
    };
`;

const Profile = () => {

    const grade = (props) =>{
        const LV = [
            "알천사",
            "나비천사",
            "미소천사",
            "열혈천사",
            "황금천사",
            "수호천사",
            "빛의천사",
            "천사장",
            "대천사",
            "대천사장",
            "알통폐인"
    ]

    return LV[props];
    }


    const userID = (id) => {
        const ID = [
            'Vivien', '시라소냥'
        ]
        return ID[id];
    } 
    const intro = "강아지를 좋아하고 독서를 좋아하는 사람입니다. 소통해요 함께 ^^";

    return(
        <Section>
            <ProfileBox bgcolor="#fefefe">
                <ProfileTop>
                    <Link to="/">
                        <EditIcon src={process.env.PUBLIC_URL + `/images/edit_icon.svg`} alt="설정 아이콘"/>
                    </Link>
                    <VisitorBox today={134} total={2487}/>
                </ProfileTop>
                <ProfileMid>
                    <ProfileImg/>
                    <ContentsBox>
                        <Grade >{grade(0)}</Grade>
                        <UserBox>
                            <UserCountry src={process.env.PUBLIC_URL + `/images/nationalflag.png`}></UserCountry>
                            <UserID>{userID(0)}</UserID>
                        </UserBox>
                        <UserIntro>{intro}</UserIntro>
                    </ContentsBox>
                </ProfileMid>
                <ProfileBot>
                    <IconBox>
                            <Icon src={process.env.PUBLIC_URL + `/images/add-mento.svg`} alt="멘토 추가 아이콘"/>
                            <Icon src={process.env.PUBLIC_URL + `/images/answer_almoney.svg`} alt="훈훈알 아이콘"/>
                            <Icon src={process.env.PUBLIC_URL + `/images/message.svg`} alt="쪽지 아이콘"/>
                    </IconBox>
                </ProfileBot>
            </ProfileBox>
        </Section>
    );
}

export default Profile;