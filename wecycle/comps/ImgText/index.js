import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Text = styled.p `
    font-size: 16px;
    font-weight: 400;
    color: black;
    letter-spacing: 0.05em;
`;

const Icon = styled.img`
    display: ${props=>props.icon};
`;

const ImgText = ({
    text="Face Mask",
    icon="block"
}) =>{
    
    return <Container>
        <Icon icon={icon} src="/facemask.svg"/>
        <Text>{text}</Text>
    </Container>
}

export default ImgText;