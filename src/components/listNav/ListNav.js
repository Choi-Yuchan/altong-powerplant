import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const langListNav = {
    ko:{
        listMenu: [
        {
            id:1,
            name: "질문/답변",
            href: '/'
        },
        {
            id:2,
            name: "알록달록",
            href: '/alog'
        },
        {
            id:3,
            name: "NEST",
            href: '/nest'
        },
        {
            id:4,
            name: "활동",
            href: '/activity'
        }
        ]
    }
}
function ListNav() {
    const listMenu = langListNav.ko.listMenu;
    const [highlight, setHighlight] = useState(0);
    return (
        <NavGroup>
            {listMenu.map((list, index) => (
                <ListEl 
                    list={list} 
                    key={list.id} 
                    highlight={highlight} setHighlight={setHighlight}
                    selected={index}
                />
            ))}
        </NavGroup>
    );
}

function ListEl(props) {
    const [place, setPlace] = useState(false);
    useEffect(()=>{
        if (props.highlight === props.selected) {
            setPlace(true);
        } else {
            setPlace(false);
        }
    }, [props.highlight]);

    return (
        <NavList place={place} onClick={()=>{props.setHighlight(props.selected);}}>
            <Link to={props.list.href || '/'}>{props.list.name}</Link>
        </NavList>
    );
}

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
    font-weight:bold;
    background-color: ${ props => props.place ? '#f5f5f5' : '#fff'};
    box-shadow: ${ props => props.place ? 'inset 3px 3px 3px #fff, inset -1px -1px 2px #fefefe':'inherit'};
    transition:0.3s;

    :active, :hover{
        background-color: #f5f5f5;
        box-shadow:inset 3px 3px 3px #fff, inset -1px -1px 2px #fefefe; 
    }
    a {
        color:${props => props.place ? '#fd0031' : '#707070'};
        text-decoration:none;
        display:block;
        transition:0.3s;

        :active, :hover{
            color: #fd0031;
        }
    }

    @media (max-width:360px){
        font-size: 0.75rem;
    }
`;



export default ListNav;
