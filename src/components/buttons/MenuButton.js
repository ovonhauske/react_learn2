import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";


export default function MenuButton  (props){
    const { item } = props
    return(
    <Link to = {item.link}>                
    <MenuItem title={item.title}>
        <img src ={item.icon} alt={item.title}/>
        {item.title}
    </MenuItem>
    </Link>

    )
}

const MenuItem = styled.div`
        align-items: center;
        color: rgba(255, 255, 255, 0.9);
        display: grid;
        grid-template-columns: 24px auto;
        gap: ${props => props.title ? "10px" : "0px"};
        padding: ${props => props.title ? "8px 16px 8px 12px" : "8px"};
        border-radius: ${props => props.title ? "24px" : "99px"};
        transition: 0.4s ease-in;

        :hover{
            background: rgba(255,255,255, 0.1);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
        }
    `

