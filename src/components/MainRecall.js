import { useState } from "react";
import styled from "styled-components"
import FooterRecall from "./FooterRecall";
import HeaderRecall from "./HeaderRecall";
import Question from "./Question";

const questionsAndAnswers = [
    {question: "O que é JSX? ", answer: "Uma extensão de linguagem do JavaScript"}, 
    {question: "O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com __ ", answer: "letra maiúscula"},
    {question: "Podemos colocar __ dentro do JSX ", answer: "expressões"},
    {question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma "},
    {question: "Usamos npm para __ ", answer: "gerenciar os pacotes necessários e suas dependências"},
    {question: "Usamos props para __ ", answer: "passar diferentes informações para componentes"},
    {question: "Usamos estado (state) para __ ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]

export default function MainRecall() {

    const [answeredQuestions, setAnsweredQuestion] = useState(0)

    return (
        <ContainerMain>
            <HeaderRecall />

            {questionsAndAnswers.map((q, i) => <Question 
            question={q.question}
            answer={q.answer}
            key={i}
            position={i+1}
            answeredQuestions={answeredQuestions}
            setAnsweredQuestion={setAnsweredQuestion}
            />
            )}
            
            <FooterRecall answeredQuestions={answeredQuestions} totalQuestions={questionsAndAnswers.length}/>
        </ContainerMain>
    )
}

const ContainerMain = styled.div`
        background-color: #FB6B6B;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0px;
        padding: 0px;
        padding-bottom: 60px;
`

