import React from 'react'
import styled from "styled-components";
import {FiHome} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiStore} from 'react-icons/bi'
import Colors from "../Colors";
import { useLocation, useNavigate } from "react-router-dom";

const NavMenuStyle = styled.div`
    display: flex;
    background-color: rgba(255, 255, 255, 0.01);
    position: absolute;
    bottom: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
`;

const Link = styled.a`

`;

export default function NavMenu() {
    return (
        <NavMenuStyle>
            <Link>
                <FiHome />
            </Link>
            <Link>
                <BiStore />
            </Link>
            <Link>
                <AiOutlineUser />
            </Link>

        </NavMenuStyle>
    )
}

