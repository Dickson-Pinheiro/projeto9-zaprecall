import styled from "styled-components"

export default function QuestionAnswer({answer, setRemind, answeredQuestions, setAnsweredQuestion, setStateQuestion}) {

    function clickOnRemindButton(remind){
        setRemind(remind)
        setAnsweredQuestion(answeredQuestions + 1)
        setStateQuestion("closed")
    }

    return (
        <ContainerQuestionAnswer>
            <p data-test="flashcard-text">{answer}</p>
            <ContainerButton>
                <ButtonAnswer onClick={() => clickOnRemindButton("noRemind")} color="#ff3030" data-test="no-btn">Não lembrei</ButtonAnswer>
                <ButtonAnswer onClick={() => clickOnRemindButton("almostRemind")} color="#FF922E" data-test="partial-btn">Quase não lembrei</ButtonAnswer>
                <ButtonAnswer onClick={() => clickOnRemindButton("remind")} color="#2FBE34" data-test="zap-btn">Zap!</ButtonAnswer>
            </ContainerButton>
        </ContainerQuestionAnswer>
    )
}

const ContainerQuestionAnswer = styled.div`
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
`

const ContainerButton = styled.div`
    margin-top: 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ButtonAnswer = styled.button`
    width: 85px;
    height: 37px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${(props) => props.color};
    border-radius: 5px;
    border: 1px solid ${props => props.color};
    padding:5px;
    cursor: pointer;
`


