import React from 'react';
import styled from 'styled-components';
import AlogContents from './ContentElements/AlogContents';


function AlogContent ({ title, writer, shadow, sticker, circle, background, backgroundColor }) {
    
    return (
        <AlogCon>
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

const AlogCon = styled.div`
    background-color:#fff;
    display:flex;
    justify-content:center;
    align-content:center;
    flex-wrap:wrap;
    cursor:pointer;
`;

export default AlogContent;