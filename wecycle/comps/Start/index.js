import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    background-color: #E87C4B;
    justify-content:center;
    width:15em;
    border-radius:10px;
    background-color: ${props=>props.backcolor};
    margin-bottom: 3rem;
`
const Button = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

const Text = styled.p `
    background-color:#E87C4B;
    margin:0.5rem;
    color:${props=>props.textcolor};
    display:flex;
    font-family: 'Fredoka One', cursive;
    letter-spacing: 0.5rem;
    font-size: 1.5rem;
    justify-content:center;
    align-items:center;
`


const Start = ({
    backcolor= "#E87C4B",
    textcolor= "white",

}) => {
    return (
        <Container>
        <Button backcolor={backcolor}>
                <Text textcolor={textcolor}> 
                    <p>START</p>
                </Text>
        </Button>
        </Container>
    )
}

export default Start;