import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Colors from "./assets/Colors";
import HomePage from "./assets/components/HomePage";
import NavMenu from "./assets/components/NavMenu";

const AppEl = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Pages = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

function App() {
  return(
  <Router>
    <AppEl>
      <Pages>
        <Routes>
          <Route exact path="/store" element={<div>Store</div>} />
          <Route exact path="/product" element={<div>Product</div>} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Pages>
      <NavMenu />
    </AppEl>
  </Router>)
}

export default App;
