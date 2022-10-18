import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: #efe9ae;
    }
`

export const containerHome =  styled.section`

`

export const textSobre = styled.div`
    text-align: center;
    flex-direction: column;
    margin-top: 50px;
    background-color: #d3f8e2;
    margin-left: 10%;
    border-radius: 10px;
    width: 80%;
    height: 300px;
    border: solid #80b918 0.5px;

    @media(max-width: 580px){
        height: 100%;
    }

    p{
        @media(min-width: 1200px){
            font-size: 1.5rem;
        }
    }

`

export const imgsODS = styled.div`
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80%;
    margin-left: 10%;
`

export const imgOBS = styled.img`
    width: 120px;
    height: 120px;
    margin-left: 10px;
    margin-top: 10px;

    @media(min-width: 1200px){
        width: 220px;
    height: 220px;
    }
`