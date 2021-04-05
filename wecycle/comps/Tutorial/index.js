import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    background-color: #8492ED;
    justify-content:center;
    width:15em;
    border-radius:10px;
    background-color: ${props=>props.backcolor};
`

const Button = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

const Text = styled.p `
    background-color:#8492ED;
    border-radius:10px;
    margin:0.1rem;
    color:${props=>props.textcolor};
    display:flex;
    font-weight: bold;
    letter-spacing: 0.25rem;
    font-size: 0.75rem;
    justify-content:center;
    align-items:center;
`


const Tutorial = ({
    backcolor= "#8492ED",
    textcolor= "white",

}) => {
    return (
        <Container>
        <Button backcolor={backcolor}>
            <Text textcolor={textcolor}> 
                <p>READ TUTORIAL</p>
            </Text>
        </Button>
        </Container>
    )
}

export default Tutorial;