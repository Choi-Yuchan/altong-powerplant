import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileImg from './profileimage/ProfileImg';
import VisitorBox from './visitorBox/VisitorBox';
import AlogMessage from './AlogMessage';
import HunPopup from './HunPopup';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

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
    background: ${props => props.bgcolor} no-repeat center center;
    background-size: cover;
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
    font-size: 1.125rem;
    font-weight: bold;
    color: #707070;
    line-height: 1.3125;
    @media (min-width:480px){
        font-size: 1.275rem;
    }

`;


const UserIntro = styled.p`
    padding:0.5rem 0; 
    font-size: 0.75rem;
    line-height: 1.5;
    color: #707070;
    word-break:keep-all;

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

const langProfile = {
    ko:{
        userData : [{
            id:"Vivien",
            intro:"???????????? ???????????? ????????? ???????????? ???????????????. ???????????? ?????? ^^",
            profileImg:`${process.env.PUBLIC_URL + '/images/profile-image.png'}`,
            countToday:134,
            countTotal:2487,
        }],
        //??????
        bgColor : [
            "#ffffff",
            "#ffffb5",
            "#ffd595",
            "#ff9595",
            "#fdb515",
            "#dcff95",
            "#effbff",
            "#b3e5fc",
            "#e1bee7",
            "#ef9cfe",
            "url('/images/Card.png')"
        ]
    },

};

const Profile = () => {
    const { t } = useTranslation();

    const grade = t("grade");
    const bgColor = langProfile.ko.bgColor;
    const userData = langProfile.ko.userData;
    const altText = t("altText");
    const [close, setClose] = useState(false);
    const [hunAl,setHunAl] = useState(false);
    const [show, setShow] = useState(true);
    const [partnerSeq, setPartnerSeq] = useState(null);
    const [flagPartner, setFlagPartner] = useState(null);

    //?????? ????????? ?????? URL ?????? ??????
    const URL_USERDATA = "/user/userdata"

    useEffect(() => {
        const getUser = async () => {
            try{
                const userdata = await axios.get(URL_USERDATA);
    
                setPartnerSeq(userdata.data.seq);
                setFlagPartner(userdata.data.flag);
            } catch (e) {
                console.log("It's failed to get data")
            }
        }

        getUser();
    },[])

    //URL 
    const URL_MENTO_LIST = `/restApi/users/${partnerSeq}/${flagPartner}/partner-save`

    const handleShow = () => {
        setShow(!show)
    }
    // ????????? ??????
    const user = {
        seq: 10000000,
        nick: "homan", // ????????????, ???????????????, ??????????????????
        lv: 2
    };
    //?????? ?????? ????????? ?????????
    const [myAlmoney, setMyAlomoney] = useState(30000);
    //????????? ?????? ?????????
    const userLogin = (props) => {
        if ( props === "") {
            alert("????????? ??? ????????? ??? ????????????.");
        } else if ( props === userData[0].id) {
            alert("??????????????? ???????????? ????????? ??? ????????????.");
        } else {
            setHunAl(true);
        }
    }
    //????????? ?????? ???????????????
    const sendPopup = (props) => {
        if (props === "") {
            alert("????????? ??? ????????? ??? ????????????.");
        } else if ( props === userData[0].id) {
            alert("??????????????? ????????? ?????? ??? ????????????.")
        } else {
            setClose(true);
        }
    }

    //???????????????????????? ?????? ???????????? ?????? ?????? ??????
    const addMento = async () => {
        try{
            const response = await axios.put(URL_MENTO_LIST, {
                seq: "231242",
                nick: "ingu1839",
                lv:"4",
            })
            console.log(response.data);
            return response.data;
        } catch (e) {
            console.log("It's failed to update data");
        }

        handleShow();
    }
    


    return(
        <Section>
            <ProfileBox bgcolor={bgColor[0]}>
                <ProfileTop>
                    {/* ?????? ??????????????? ???????????? ?????????. */}
                    <Link to="/">
                        <EditIcon src={process.env.PUBLIC_URL + `/images/edit_icon.svg`} alt={altText[0]}/>
                    </Link>
                    <VisitorBox today={userData[0].countToday} total={userData[0].countTotal}/>
                </ProfileTop>
                <ProfileMid>
                    <ProfileImg userImg={userData[0].profileImg}/>
                    <ContentsBox>
                        <Grade>{grade[1]}</Grade>
                        <UserBox>
                            <UserCountry src={process.env.PUBLIC_URL + `/images/nationalflag.png`}></UserCountry>
                            <UserID>{userData[0].id}</UserID>
                        </UserBox>
                        <UserIntro>{userData[0].intro}</UserIntro>
                    </ContentsBox>
                </ProfileMid>
                <ProfileBot>
                    <IconBox>
                            <Icon onClick={addMento} src={show ? process.env.PUBLIC_URL + '/images/add-mento.svg' : process.env.PUBLIC_URL + '/images/added-mento.png'} alt={altText[1]}/> 
                            <Icon onClick={() => {userLogin(user.nick)}} src={process.env.PUBLIC_URL + `/images/answer_almoney.svg`} alt={altText[2]}/>
                            <Icon onClick={() => {sendPopup(user.nick)}} src={process.env.PUBLIC_URL + `/images/message.svg`} alt={altText[3]}/>
                    </IconBox>
                    <AlogMessage close={close} setClose={setClose} userData={userData}/>
                    <HunPopup 
                        hunAl={hunAl} 
                        setHunAl={setHunAl} 
                        myAlmoney={myAlmoney} setMyAlomoney={setMyAlomoney}
                    />
                </ProfileBot>
            </ProfileBox>
        </Section>
    );
}

export default Profile;
