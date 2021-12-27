import React from "react";
import styled from "styled-components";
import bidImage from "../images/bidImage.png";
import Colors from "../Colors";
import Img from "./styled/Img.styled";

const MyBidsListStyle = styled.div`
    padding: 0 1rem;
    margin-top: 1rem;

`;
const TitleStyle = styled.h3`
    font-weight: 500;
    margin-bottom: 1rem;
`;

const ItemListStyle = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

`;

const BidItemStyle = styled.span`
    display: flex;
    padding: 0.5rem;
    cursor: pointer;
    width: 100%;
    align-items: center;
    transition-property: background-color, border-radius;
    transition-duration: 0.5s;

    &:hover{
        background-color: ${Colors.GrayBorder};
        border-radius: 12px
    }

`;

const BidData = styled.span`
    margin-left: 1rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    row-gap: 0.5rem;
    justify-content: center;

`;
const BTitle = styled.span`
    font-weight: 500;
`;
const BDesc = styled.span`
    color: ${Colors.Gray};
`;
const BidAmount = styled.span`
    font-weight: 500;
`;

function BidItem() {
  return (
    <BidItemStyle>
      <Img width="4rem" height="4rem" borderRadius="12px" src={bidImage} />
      <BidData>
        <BTitle>Pedro Martinez</BTitle>
        <BDesc>Waldo</BDesc>
      </BidData>
      <BidAmount>1.4 ETH</BidAmount>
    </BidItemStyle>
  );
}

export default function MyBidsList() {
  return (
    <MyBidsListStyle>
      <TitleStyle>Your Bids</TitleStyle>
      <ItemListStyle>
        <BidItem />
        <BidItem />
      </ItemListStyle>
    </MyBidsListStyle>
  );
}
