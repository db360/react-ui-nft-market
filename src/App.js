import React from "react";
import { useMoralis } from "react-moralis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// import Colors from "./assets/Colors";
import HomePage from "./assets/components/HomePage";
import NavMenu from "./assets/components/NavMenu";
import ProductPage from "./assets/components/ProductPage";
import StorePage from "./assets/components/StorePage";
import Login from "./assets/components/Login";

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
  const { authenticate, isAuthenticated, user, isAuthenticating } = useMoralis();

  console.log(authenticate);
  console.log(isAuthenticated);
  console.log(user);
  console.log(isAuthenticated);

  return (
    <Router>
      <AppEl>
        <Pages>
          <Routes>
            <Route exact path="/store" element={<StorePage />} />
            <Route exact path="/product" element={<ProductPage />} />
            <Route exact path="/"  element={isAuthenticated ? <HomePage /> : <Login />} />
          </Routes>
        </Pages>
        {isAuthenticated ? <NavMenu /> : ''}
      </AppEl>
    </Router>
  );
}

export default App;
