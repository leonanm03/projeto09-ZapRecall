import DECK from "../../deck"
import Question from "./Question";


export default function Questions(props) {

    return (
        <ul>
            {DECK.map((c) => (
                <Question
                    key={c.qNumber}
                    qNumber={c.qNumber}
                    question={c.question}
                    answer={c.answer}
                    {...props}
                />
            ))}
        </ul>
    )
        ;
}