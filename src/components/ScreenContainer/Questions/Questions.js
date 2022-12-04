import DECK from "../../deck"
import Question from "./Question";


export default function Questions(
    {
        openQuestion, setopenQuestion,
        seeAnswer, setseeAnswer
    }) {

    return (
        <ul>
            {DECK.map((c) => (
                <Question
                    key={c.qNumber}
                    qNumber={c.qNumber}
                    question={c.question}
                    answer={c.answer}
                    openQuestion={openQuestion} setopenQuestion={setopenQuestion}
                    seeAnswer={seeAnswer} setseeAnswer={setseeAnswer}
                />


            ))}
        </ul>
    )
        ;
}