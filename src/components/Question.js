import { useState } from "react";
import QuestionClosed from "./QuestionClosed";
import QuestionOpen from "./QuestionOpen";
import QuestionAnswer from "./QuestionAnswer";

export default function Question({ position, question, answer, answeredQuestions, setAnsweredQuestion }) {
    const [remind, setRemind] = useState("noAnswer")
    const [stateQuestion, setStateQuestion] = useState("closed")

    return (
        <>
            {
                stateQuestion === "closed" && <QuestionClosed
                    position={position}
                    remind={remind}
                    setStateQuestion={setStateQuestion}
                />
            }

            {
                stateQuestion === "open" && <QuestionOpen
                    question={question}
                    setStateQuestion={setStateQuestion}
                />
            }

            {
                stateQuestion === "answer" && <QuestionAnswer
                    answer={answer}
                    setRemind={setRemind}
                    answeredQuestions={answeredQuestions}
                    setAnsweredQuestion={setAnsweredQuestion}
                    setStateQuestion={setStateQuestion}
                />
            }
        </>
    )
}