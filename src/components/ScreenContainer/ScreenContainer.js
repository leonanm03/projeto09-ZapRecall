import { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Logo from "./Logo";
import Questions from "./Questions/Questions";

export default function ScreenContainer() {
    const [openQuestion, setopenQuestion] = useState([])
    const [seeAnswer, setseeAnswer] = useState([])
    const [answeredQuestions, setansweredQuestions] = useState([])

    return (
        <StyledDiv>
            <Logo />
            <Questions
                openQuestion={openQuestion} setopenQuestion={setopenQuestion}
                seeAnswer={seeAnswer} setseeAnswer={setseeAnswer}
                answeredQuestions={answeredQuestions} setansweredQuestions={setansweredQuestions}
            />

            <Footer />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
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