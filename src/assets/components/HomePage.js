import React from "react";
import { useMoralis } from "react-moralis";
import styled from "styled-components";
import Colors from "../Colors";
import FeaturedTab from "./FeaturedTab";
import MyBidsList from "./MyBidsList";
import SearchBar from "./styled/SearchBar.styled";
import Tabs from "./styled/Tabs.styled";

const tabs = [
  { id: 1, title: "Featured", content: <FeaturedTab /> },
  { id: 2, title: "Collection", content: <div>Tab2</div> },
  { id: 3, title: "Artists", content: <div>Tab3</div> },
  { id: 4, title: "Tag", content: <div>Tab4</div> },
];

const HomePageStyle = styled.div`
  background-color: ${Colors.Background};
  flex: 1;
  padding-bottom: 10vh;
  overflow: auto;
  overflow-x: hidden;
  min-height: min-content;
  padding-top: 1rem;
  scrollbar-width: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h1`
  font-family: "DM Mono";
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;

`;
const LogoutButton = styled.button`
  background-color: ${Colors.Primary};
  cursor: pointer;
  border: none;
  border-radius: 10%;
  padding: 10px 15px;
  color:white;
  font-weight: bold;

`;
export default function HomePage() {
  const {user, logout} = useMoralis();

  return (
    <HomePageStyle>
      <ButtonContainer>
        <LogoutButton onClick={logout}>Logout</LogoutButton>
      </ButtonContainer>

      <Title>Polygon</Title>
      <SearchBar />
      <Tabs key={tabs.id} tabs={tabs} />
      <MyBidsList />
    </HomePageStyle>
  );
}
