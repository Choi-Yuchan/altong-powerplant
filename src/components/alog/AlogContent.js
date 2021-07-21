import React from 'react';
import styled from 'styled-components';
import AlogContents from './ContentElements/AlogContents';

function AlogContent ({ title, writer, shadow, sticker, circle, background, backgroundColor,url }) {
    
    return (
        <AlogCon href={url}>
                <AlogContents 
                title={title} 
                writer={writer} 
                shadow={shadow} 
                sticker={sticker} 
                circle={circle} 
                background={background}
                backgroundColor={backgroundColor}
                />
        </AlogCon>
    );
};

const AlogCon = styled.a`
    background-color:#fff;
    display:flex;
    justify-content:center;
    align-content:center;
    flex-wrap:wrap;
    text-decoration:none;
    color:#707070;
    cursor:pointer;
`;

export default AlogContent;