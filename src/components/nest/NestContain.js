import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import NestEl from './NestEl';

function NestContain(props) {

    const nestNickname = { name: 'Vivien'}
    

    const count = props.nestList.length;

    const total = 100/count * 2;
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (currentSlide >= 90 - (100/count)) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + total);
        }
    }
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(total);
        } else {
            setCurrentSlide(currentSlide - total);
        }
    }

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}%)`;
    }, [currentSlide]);


    
    return (
        <NestDiv>
            <NestTitle>{nestNickname.name} 님이 {props.open===true?"개설한":"가입한"} NEST</NestTitle>
            <NestBigBox>
                {
                    count >= 3
                    ? <NestArrowRight onClick={nextSlide}></NestArrowRight>
                    : null
                }
                <NestBox>
                    <NestContainer count={count} ref={slideRef}>
                        {props.nestList.map(nestlist => (
                            <NestEl nestlist={nestlist} key={nestlist.id} count={count} />
                        ))}
                    </NestContainer>
                </NestBox>
                {
                    currentSlide > 0
                    ? <NestArrowLeft onClick={prevSlide}></NestArrowLeft>
                    : null
                }
            </NestBigBox>
        </NestDiv>
    );
}

const NestDiv = styled.div`
    margin-top:1rem;
`;

const NestTitle = styled.span`
    font-size:0.875rem;
    font-weight:bold;
    color:#707070;
    margin-left:0.5rem;
`;
const NestBox = styled.div`
    width:100%;
    position:relative;
    overflow-x:scroll;
    &::-webkit-scrollbar {
        height:0;
    }
`;
const NestBigBox = styled.div`
    width:100%;
    position:relative;
`;

const NestContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-top:0.8rem;
    margin-bottom:1.8rem;
    justify-content: space-between;
    width:${props => props.count*50}%;
    white-space:nowrap;
    margin-left:${props => props.left}%;
    transition:all 0.3s;
`;

const NestArrowRight = styled.div`
    width:10px;
    height:10px;
    border-top:2px solid #666;
    border-right:2px solid #666;
    position:absolute;
    top:45%;
    right:2px;
    z-index:9;
    transform:rotate(45deg);
    cursor:pointer;
    &::after {
        content:"";
        width:20px;
        height:20px;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%) rotate(45deg);
    }
`;
const NestArrowLeft = styled.div`
    width:10px;
    height:10px;
    border-top:2px solid #666;
    border-left:2PX SOLID #666;
    position:absolute;
    top:45%;
    left:2px;
    z-index:9;
    transform:rotate(-45deg);
    cursor:pointer;
    &::after {
        content:"";
        width:20px;
        height:20px;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%) rotate(45deg);
    }
`;


export default NestContain;