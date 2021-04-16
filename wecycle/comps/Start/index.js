import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    background-color: #E87C4B;
    justify-content:center;
    width:${props=>props.width};
    border-radius:${props=>props.radius};
    margin-top:${props=>props.margintop};
    margin-bottom:${props=>props.marginbottom};
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
    letter-spacing: ${props=>props.spacing};
    font-size: ${props=>props.fontsize};
    justify-content:center;
    align-items:center;
`


const Start = ({
    margintop="2rem",
    marginbottom="3rem",
    radius="10px",
    width="18em",
    fontfamily="'Fredoka One', cursive",
    fontsize="30px",
    text= "START",
    spacing="0.25rem"

}) => {
    return (
        <Container radius={radius} width={width} margintop={margintop} marginbottom={marginbottom}>
        <Button>
                <Text fontsize={fontsize} fontfamily={fontfamily} spacing={spacing}> 
                    <p>{text}</p>
                </Text>
        </Button>
        </Container>
    )
}

export default Start;