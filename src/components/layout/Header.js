import React from "react";
import styled from "styled-components";
import {menuData} from "../../Data/menuData"
import MenuButton from "../buttons/MenuButton";
import { Link } from "gatsby";
import MenuTooltip from "../tooltips/MenuTooltip";


    const Wrapper = styled.div`
        position: absolute;
        top: 60px;
        display: grid;
        width: 100%;
        grid-template-columns: 44px auto;
        justify-content: space-between;
        padding: 0 30px;
        align-items: center;
    `
    const MenuWrapper = styled.div `
        display: grid;
        grid-template-columns: repeat(${props => props.count}, auto);
        grid-gap: 30px;
    `
    
export default function Header(){
    return (
        <Wrapper>
        <Link to = "/" >
            <img src="/images/logos/logo.svg"/>
        </Link>
        <MenuWrapper count = {menuData.length} >
        {menuData.map ((item ,  index) => (
         <MenuButton item ={item} key={index}/>
        ))}
        </MenuWrapper>
        <MenuTooltip />
        </Wrapper>
    )
}

