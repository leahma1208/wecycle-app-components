import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    margin-right: 10px;
`;

const Image = styled.img`
    width:${props=>props.imagesize};
`

const Text = styled.p`
    font-size:16px;
`

const Flags = ({
    country="Monaco",
    image = "/monaco.svg",
    imagesize = "100px"
}) => {
    return (
        <Container>
            <Image width={imagesize} src={image} ></Image>
            <Text>{country}</Text>
        </Container>
    )
}



export default Flags;