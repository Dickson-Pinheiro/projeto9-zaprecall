import styled from "styled-components"
import setaPlay from "../img/seta_play.png"
import iconeErro from "../img/icone_erro.png"
import iconeQuase from "../img/icone_quase.png"
import iconeCerto from "../img/icone_certo.png"


export default function QuestionClosed({ position, remind, setStateQuestion }) {

    function remindImage(){
        if(remind==="noRemind") return iconeErro
        if(remind==="almostRemind") return iconeQuase
        if(remind==="remind") return iconeCerto
        if(remind==="noAnswer") return setaPlay
    }

    return (
        <ContainerQuestionClosed remind={remind} data-test="flashcard">

            <p data-test="flashcard-text">pergunta {position}</p>

            <img src={remindImage()}
            onClick={() => {if(remind==="noAnswer")
            setStateQuestion("open")}} 
            data-test= "play-btn no-icon zap-icon partial-icon"
            />

        </ContainerQuestionClosed>
    )
}

const ContainerQuestionClosed = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        text-decoration: ${props => props.remind==="noAnswer" ? "none": "line-through"};
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => {
            if(props.remind === "noAnswer") return "#333333"
            if(props.remind === "almostRemind") return "#FF922E"
            if(props.remind === "remind") return "#2FBE34"
            if(props.remind === "noRemind") return "#FF3030"
        }};
    }
    img {
        cursor: pointer;
    }
`