import React from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";

import Colors from "../Colors";
import Img from "./styled/Img.styled";

const items = [
  { id: 1, title: "Universo 34", subTitle: "Maketi", image: image1 },
  { id: 2, title: "Holy", subTitle: "Lea Kovaseva", image: image2 },
  { id: 3, title: "Title 3", subTitle: "Subtitle 3", image: image3 },
  { id: 4, title: "Title 4", subTitle: "Subtitle 4", image: image4 },
];

const FeaturedTabStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  height: 400px;
`;

const ItemStyle = styled.div`
  background-color: ${Colors.CardBackground};
  padding: 0 0.4rem;
  border-radius: 12px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
`;

const TitleStyle = styled.span`
  font-sie: 1.1rem;
  margin-top: 0.5rem;
`;
const SubTitleStyle = styled.span`
  color: ${Colors.Gray};
  font-sie: 1rem;
`;
const ShowMore = styled.span`
  text-align: center;
  position: absolute;
  cursor: pointer;
  left: 0;
  bottom: 0;
  width: 100%;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.32);
  padding: 1rem;
  border: 1px solid ${Colors.GrayBorder};
  backdrop-filter: blur(17px);
  border-radius: 12px;
`;
const BottomFade = styled.span`
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 25%;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    ${Colors.Background}
  );
`;

export default function FeaturedTab() {
  const nav = useNavigate();
  return (
    <FeaturedTabStyle>
      {items.map((item) => {
        return (
          <ItemStyle key={item.id}
            onClick={() => {
              nav("/product");
            }}
          >
            <Img src={item.image} />
            <TitleStyle>{item.title}</TitleStyle>
            <SubTitleStyle>{item.subTitle}</SubTitleStyle>
          </ItemStyle>
        );
      })}
      <BottomFade />
      <ShowMore>
        <BiChevronDown /> Show More
      </ShowMore>
    </FeaturedTabStyle>
  );
}
