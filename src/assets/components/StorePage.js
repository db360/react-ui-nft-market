import React from "react";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import Tabs from "./styled/Tabs.styled";
import storeImage2 from "../images/shopImage2.png";
import Img from "./styled/Img.styled";
import { useNavigate } from "react-router-dom";
import StoreHero from "./StoreHero";
import PageContainerStyle from "./styled/PageContainer.styled";

const tabs = [
  { id: 1, title: "Artworks", content: <Img src={storeImage2}/> },
  { id: 2, title: "Collection", content: <div>Collection</div> },
  { id: 3, title: "About", content: <div>About</div> },
];

const TopMenuStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    align-items: center;
    font-size: 1.5rem;
`;

export default function StorePage() {

    const nav = useNavigate();

  return (
    <PageContainerStyle>
      <TopMenuStyle>
        <FiArrowLeft onClick={()=>{
            nav(-1);
        }}/>
        <span>
          <RiSearchLine style={{marginRight: '1.5rem'}}/>
          <BsThreeDots />
        </span>
      </TopMenuStyle>
      <StoreHero />
      <Tabs tabs={tabs} />
    </PageContainerStyle>
  );
}
