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
  text-alingn: center;
  position: absolute;
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
    
`;

export default function FeaturedTab() {
  return <FeaturedTabStyle> FEATURED TAB</FeaturedTabStyle>;
}
