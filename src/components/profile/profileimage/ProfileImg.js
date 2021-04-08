import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.div`
    padding-right: 0.5rem;
    padding-left: 1rem;
    width: 20%;
    @media (max-width: 480px){
        padding-left:0.5rem;
        width: 25%;
    }
`;

const ProfileImage = styled.img`
    cursor: pointer;
    border-radius: 50%;
    width: 100%;
    height: 100%;
`;

const ProfileImg = () => {
    return(
        <ImageBox>
            <ProfileImage src={process.env.PUBLIC_URL + `/images/20210312_163030.png`}></ProfileImage>
        </ImageBox>
    );
}

export default ProfileImg;