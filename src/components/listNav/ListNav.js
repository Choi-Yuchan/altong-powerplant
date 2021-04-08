import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavGroup = styled.nav`
    height: 50px;
    background-color:white;
    box-shadow: -1px -1px 2px #fefefe, 1px 1px 2px rgba(0,0,0,0.16);
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100%;
    list-style:none;
`;
const NavList = styled.li`
    width: inherit;
    height: 100%;
    text-align: center;
    line-height: 50px;
    cursor : pointer;
    font-size: 0.875rem;
    transition:0.3s;

    :active, :hover{
        font-weight: bold;
        background-color: #f5f5f5;
        box-shadow:inset 3px 3px 3px #fff, inset -1px -1px 2px #fefefe; 
    }

    @media (max-width:360px){
        font-size: 0.75rem;
    }
`;

const Anchor = styled(Link)`
    color:#707070;
    text-decoration:none;

    :active, :hover{
        color: #fd0031;
    }
`;
const ListNav = () => {
    return(
        <NavGroup>
            <NavList> 
                <Anchor to="/">질문/답변</Anchor>
            </NavList>
            <NavList> 
                <Anchor to="/alog">알로그</Anchor>
            </NavList>
            <NavList> 
                <Anchor to="/nest">NEST</Anchor>
            </NavList>
            <NavList> 
                <Anchor to="/activity">활동</Anchor>
            </NavList>
        </NavGroup>
    );
}

export default ListNav;