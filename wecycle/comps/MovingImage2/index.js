import React from 'react'
import styled, { keyframes } from 'styled-components';


const Container = styled.div`
display: flex;
width:100%;
align-items:center;
justify-content:center;
margin-bottom:30px;


@keyframes move{
    0%{
        transform:translateY(0)
    }
    50%{
        transform:translateY(15px)
    }
}
`

const Image = styled.img`
width:120px;


animation:move 4s linear infinite;
`

const Holder = styled.div``


const MovingImage = ({
    image="/plasticbag.svg"

}) =>{
    
    return <Container>
        <Holder>
            <Image src={image}/>
        </Holder>
    </Container>
}

export default MovingImage;