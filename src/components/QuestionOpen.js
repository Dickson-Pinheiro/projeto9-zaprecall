import styled from "styled-components"
import setaVitar from "../img/seta_virar.png"

export default function QuestionOpen({question, setStateQuestion}){
    return(
        <ContainerQuestionOpen>
            <p data-test="flashcard-text">{question}</p>
            <img onClick={() => setStateQuestion("answer")} src={setaVitar} data-test="turn btn"/>
        </ContainerQuestionOpen>
    )
}

const ContainerQuestionOpen = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
    }
`