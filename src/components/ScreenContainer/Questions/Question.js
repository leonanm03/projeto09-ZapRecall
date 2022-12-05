
import styled from "styled-components";
import { useState } from "react";

import playIcon from "../../../assets/seta_play.png";
import turnArrow from "../../../assets/seta_virar.png"
import wrongIcon from "../../../assets/icone_erro.png";
import almostIcon from "../../../assets/icone_quase.png";
import correctIcon from "../../../assets/icone_certo.png";


export default function Question(
    {
        qNumber, question, answer,
        openQuestion, setopenQuestion,
        seeAnswer, setseeAnswer,
        answeredQuestions, setansweredQuestions

    }) {

    const [answered, setanswered] = useState(false);
    function answerResult(qNumber, resposta) {
        if (!answeredQuestions.some((x) => x.qNumber === qNumber)) {
            setansweredQuestions([...answeredQuestions, { qNumber, resposta }]);
            setanswered(true);
        }
    }

    function checkAnswer() {
        if (answeredQuestions.some((x) => x.qNumber === qNumber && x.resposta === "errada")) {
            return { icon: wrongIcon, color: "#FF3030" };
        } else if (answeredQuestions.some((x) => x.qNumber === qNumber && x.resposta === "quase")) {
            return { icon: almostIcon, color: "#FF922E" };
        } else if (answeredQuestions.some((x) => x.qNumber === qNumber && x.resposta === "certa")) {
            return { icon: correctIcon, color: "#2FBE34" };
        } else {
            return { icon: playIcon, color: "#333333" };
        }
    }



    function openThisQuestion() {
        openQuestion.includes(qNumber)
            ? setopenQuestion(
                openQuestion.filter((x) => x !== qNumber)
            )
            : setopenQuestion([...openQuestion, qNumber]);
    }

    function openThisAnswer() {
        seeAnswer.includes(qNumber)
            ? setseeAnswer(seeAnswer.filter((x) => x !== qNumber))
            : setseeAnswer([...seeAnswer, qNumber]);
    }

    if (!openQuestion.includes(qNumber) || answered) {
        return (
            <ClosedQuestion
                openQuestion={openQuestion} qNumber={qNumber}
                answered={answered}
                answeredQuestions={answeredQuestions}
                checkAnswer={checkAnswer}
            >

                <p> Pergunta {qNumber}</p>
                <input
                    onClick={openThisQuestion}
                    type="image"
                    src={checkAnswer().icon}
                    alt={checkAnswer().icon}
                />
            </ClosedQuestion>
        );
    } else if (!seeAnswer.includes(qNumber)) {
        return (
            <OpenQuestion>
                <p> {question}</p>
                <img onClick={openThisAnswer} src={turnArrow} alt={turnArrow}></img>
            </OpenQuestion>
        );
    }
    else {
        return (
            <OpenQuestion>
                <p> {answer}</p>
                <ButtonsDiv>
                    <button onClick={() => answerResult(qNumber, "errada")}>
                        Não Lembrei!
                    </button>
                    <button onClick={() => answerResult(qNumber, "quase")}>
                        {" "}
                        Quase não Lembrei
                    </button>
                    <button onClick={() => answerResult(qNumber, "certa")}>Zap</button>
                </ButtonsDiv>
            </OpenQuestion>
        );
    }
}

const ClosedQuestion = styled.li`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.checkAnswer().color};
    text-decoration: ${(props) => (props.answered ? "line-through" : "none")};
  }
  img {
    width: 20px;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const OpenQuestion = styled.li`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  img:hover {
    cursor: pointer;
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    width: 90px;
    font-family: "Recursive", "sans-serif";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background: #ff3030;
    border-radius: 5px;
    border: none;
    padding: 5px;
  }
  button:nth-child(2) {
    background: #ff922e;
  }
  button:nth-child(3) {
    background: #2fbe34;
  }
  button:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;