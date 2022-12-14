import styled from "styled-components";
import logoImg from "../../assets/logo.png"


export default function Logo() {
  return (
    <HeaderDiv>
      <img src={logoImg} alt="Header Logo"></img>
        <h1>ZapRecall</h1>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;