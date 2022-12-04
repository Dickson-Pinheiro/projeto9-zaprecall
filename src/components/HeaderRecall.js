import styled from "styled-components"
import logo from "../img/logo.png"

export default function HeaderRecall() {
    return (
        <ContainerHeader>
            <img src={logo} />
            <h1>ZapRecall</h1>
        </ContainerHeader>

    )
}

const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`
