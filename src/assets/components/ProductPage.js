import React from "react";
import styled from "styled-components";
import Colors from "../Colors";
import { BsThreeDots } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "./styled/Button.styled";
import { useNavigate } from "react-router-dom";

import PageContainerStyle from "./styled/PageContainer.styled";
import ProductCard from "./styled/ProductCard";

const TopMenuStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    margin: 0 1.5rem;
`;
const TitleStyle = styled.span`
    font-size: 1.2rem;
    font-weight: 500;

`;
const HoldBidStyle = styled.div`
    display: flex;
    align-items: center;
    font-weight: 1.3rem;
    background-color: ${Colors.Primary};
    color: ${Colors.CardBackground};
    border-radius: 12px;
    padding: 1rem;
    margin: 0 .5rem;
    column-gap: 0.5rem;
    margin-top: 1rem;

    & > svg {
        font-size: 1.5rem
    }
`;
const HoldBidText = styled.span`
    flex: 1;
`;

export default function ProductPage() {
    const nav = useNavigate();
  return(
    <PageContainerStyle>
        <TopMenuStyle>
            <FiArrowLeft onClick={()=>{
                nav(-1);
            }}/>
            <TitleStyle>Artwork</TitleStyle>
            <BsThreeDots />
        </TopMenuStyle>
        <ProductCard />
        <HoldBidStyle>
            <AiOutlineShoppingCart />
            <HoldBidText>Confirm 4.0 ETH Bid</HoldBidText>
            <Button color={Colors.Primary} bgColor={Colors.CardBackground}>Hold to bid</Button>
        </HoldBidStyle>
    </PageContainerStyle>
  );
}
