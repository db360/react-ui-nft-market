import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import Colors from "./assets/Colors";

const GlobalStyle = createGlobalStyle`
  body{
    background-color:${Colors.Secondary}
  }

*{
  padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: 'Poppins', sans-serif;
}

a{
  text-decoration: none;
}

a:visisted{
  color: #070710;
}

`;

const public_id = process.env.REACT_APP_NEXT_PUBLIC_APP_ID;
const server_url = process.env.REACT_APP_NEXT_PUBLIC_SERVER_URL;

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <GlobalStyle />
      <MoralisProvider appId={public_id} serverUrl={server_url}>
        <App />
      </MoralisProvider>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
