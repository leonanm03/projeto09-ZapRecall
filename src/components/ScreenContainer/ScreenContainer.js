import styled from "styled-components";
import Footer from "./Footer";

export default function ScreenContainer() {
    return (
        <Styleddiv>

            <Footer />
        </Styleddiv>
    )
}

const Styleddiv = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  
`;