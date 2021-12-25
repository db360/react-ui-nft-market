import React from 'react'
import styled from "styled-components";
import {RiSearchLine} from 'react-icons/ri';
import Colors from "../../Colors";

const SearchBarStyle = styled.div`
    background-color: ${Colors.CardBackground};
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 12px;
    margin: 0 1rem 2rem 1rem;

    /* Para acceder al svg del icono de search */
    & > svg {
        font-size: 1.5rem;
        color: ${Colors.Gray}
    }
`;

const InputStyle = styled.input`
    font-size: 1rem;
    border: none;
    flex: 1;

    :focus {
        outline: none;
    }

`;

export default function SearchBar() {
    return (
        <SearchBarStyle>
            <InputStyle placeholder='Search on Polygon'/>
            <RiSearchLine />
        </SearchBarStyle>
    )
}

