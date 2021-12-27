import React from 'react'
import styled from "styled-components";
import Colors from "../../Colors";
import artImage from './../../images/artworkImage.png';
import shopImage from './../../images/shopImage1.png';
import Button from "./Button.styled";
import Img from './Img.styled';

const ProductCardStyle = styled.div`
    background-color: rgba(250, 250, 250, .1);
    box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    margin: 1rem .5rem 0 0.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;
const InfoContainer = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
`;
const Info = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    row-gap: .5rem;
    justify-content: center;
`;
const Name = styled.span``;
const Price = styled.span`
    font-weight: 500;
`;
const ButtonContainer = styled.span`
    flex: 1;
    display: flex;
    column-gap: 1rem;
`;
const GreenCircle = styled.span`
    width: 1.2rem;
    height: 1.2rem;
    display: inline-block;
    margin: auto 0;
    border-radius: 50%;
    border: 2px solid ${Colors.CardBackground};
    background-color: green;
`;


export default function ProductCard() {
    return (
        <ProductCardStyle>
            <Img src={artImage} />
            <InfoContainer>
                <Info>
                    <Name>Elements</Name>
                    <Price>3.54 ETH</Price>
                </Info>
                <Img width="15vw" src={shopImage} />
            </InfoContainer>
            <ButtonContainer>
                <Button flex disabled fw np>
                    <GreenCircle />
                    Disabled
                </Button>
                <Button fw np>
                    Option
                </Button>
            </ButtonContainer>
        </ProductCardStyle>
    )
}

