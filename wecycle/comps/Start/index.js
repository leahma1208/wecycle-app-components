import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    background-color: #E87C4B;
    justify-content:center;
    width:${props=>props.width};
    border-radius:${props=>props.radius};
    margin-bottom: 3rem;
`
const Button = styled.div`
    display:flex;
    flex-direction:column;
`

const Text = styled.p `
    background-color:#E87C4B;
    margin:0.5rem;
    color:white;
    display:flex;
    font-family: ${props=>props.fontfamily};
    letter-spacing: 0.25rem;
    font-size: ${props=>props.fontsize};
    justify-content:center;
    align-items:center;
`


const Start = ({
    radius="10px",
    width="18em",
    fontfamily="'Fredoka One', cursive",
    fontsize="30px",
    text= "START"

}) => {
    return (
        <Container radius={radius} width={width}>
        <Button>
                <Text fontsize={fontsize} fontfamily={fontfamily}> 
                    <p>{text}</p>
                </Text>
        </Button>
        </Container>
    )
}

export default Start;