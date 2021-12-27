import styled from "styled-components";

const Img = styled.img`
  width: ${(p) => (p.width ? p.width : "100%")};
  ${(p) => (p.height ? `height:${p.height};` : "")};
  ${(p) => (p.borderRadius ? `border-radius:${p.borderRadius};` : "")};
  ${(p) => (p.z ? 'z-index:50;' : '' )};
  ${(p) => (p.login ? 'position:absolute;height:100%;width:100vw;object-fit:cover;' : '' )};
  ${(p) => (p.logo ? 'position:absolute;margin-top:5rem;margin-left:auto;margin-right:auto;width:100%;object-fit:contain' : '' )};
  ${(p) => (p.avatar ? 'width:50px; height:50px;background-color:black;border-radius:50%;cursor:pointer;' : '' )};
`;

export default Img;
