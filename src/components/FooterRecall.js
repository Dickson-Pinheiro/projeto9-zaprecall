import styled from "styled-components"

export default function FooterRecall({answeredQuestions, totalQuestions}) {
    return (
        <ContainerFooter>
            {answeredQuestions}/{totalQuestions} CONCLUÍDOS
        </ContainerFooter>
    )
}

const ContainerFooter = styled.footer`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`