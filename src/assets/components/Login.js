import { useMoralis } from "react-moralis";
import ReactLoading from "react-loading";
import styled from "styled-components";
import Img from "./styled/Img.styled";

import dabLogo from "../images/dab-logo.png";
import loginBackground from "../images/background1.jpg";
import Button from "./styled/Button.styled";


const Loading = styled.div`
transform: translateY(100px);
top:50%;
  z-index:50;
  justify-self:center;
  margin:auto;
  & h3{
    color: white;
    fonts-size: 1rem;
  }

  & svg{

  }
`;

function Login() {
  const { authenticate, isAuthenticating } = useMoralis();

  return (
    <>
      <Img logo z src={dabLogo} height={200} width={350} />
      {!isAuthenticating ? (
        <Button login onClick={authenticate}>Login</Button>
      ) : (
        <Loading>
          <h3>Waiting for Metamask</h3>
          <ReactLoading type="cylon" color="#AD0786" width={"100%"} height={"100%"} delay={10} />
        </Loading>
      )}
      <Img login src={loginBackground} />
    </>
  );
}

export default Login;
