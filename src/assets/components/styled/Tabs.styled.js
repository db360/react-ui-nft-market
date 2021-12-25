import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Colors from "../../Colors";


const TabsStyles = styled.div`
  width: 100%;
`;
const TitleContainerStyle = styled.span`
  display: flex;
  justify-content: space-around;
  margin: 0 1.5rem;
  padding: 0 1rem;
`;
const TittleStyle = styled.span`
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  ${(p) => (p.active ? "" : `color:${Colors.Gray};`)};
  ${(p) => (p.active ? `font-weight:500;` : "")};

  &::after {
    ${(p) => (!p.active ? "display:none;" : "")}
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 2rem;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 0.3rem;
    background-color: ${Colors.Primary};

  }
`;
const ContentStyle = styled.div`
  margin: 0 0.5rem;
  margin-top: 1rem;
`;

export default function Tabs({tabs}) {
  const [CurrentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <TabsStyles>
      <TitleContainerStyle>
        {tabs.map((tab) => {
          return (
            <TittleStyle onClick={()=>{
                if(CurrentTab.id !== tab ) {
                    setCurrentTab(tab);
                }

            }} active={CurrentTab.id === tab.id}>
              {tab.title}
            </TittleStyle>
          );
        })}
      </TitleContainerStyle>
      <ContentStyle>{CurrentTab.content}</ContentStyle>
    </TabsStyles>
  );
}
