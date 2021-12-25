import React from 'react'
import styled from "styled-components";
import Colors from "../Colors";
import FeaturedTab from './FeaturedTab';
import SearchBar from './styled/SearchBar.styled';
import Tabs from './styled/Tabs.styled';

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
    overflow-x: hidden ;
    min-height: min-content;
    padding-top: 1rem;
    scrollbar-width: 0;
    ::-webkit-scrollbar{
        display: none;
    }
`;

const Title = styled.h1`
    font-family: 'DM Mono';
    font-weight: normal;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
`;
export default function HomePage() {
    return (
        <HomePageStyle>
            <Title>Polygon</Title>
            <SearchBar />
            <Tabs tabs={tabs} />
        </HomePageStyle>
    )
}

