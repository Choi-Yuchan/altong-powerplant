import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const ColorBox = styled.div`
    background-color:#bebebe;
`;

const ChangedColorBox = styled.div`
    background-color:skyblue;
`;
const Home = () => {
    const [isColor,setIsColor] = useState(true);
    const changeColor = () => setIsColor(!isColor);

    return(
        <div>
            <button onClick = {changeColor}>Button</button>
            {isColor ? <ColorBox>this is a color box</ColorBox> : 
            <ChangedColorBox>it changed a new color</ChangedColorBox>
            }
        </div>
    );
};

export default Home;