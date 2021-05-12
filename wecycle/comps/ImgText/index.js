import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    
`;

const Text = styled.p `
    font-size: 18px;
    font-weight: 400;
    color: #393939;
    letter-spacing: 0.05em;
    max-width: 150px;
`;

const Icon = styled.img`
    display: ${props=>props.icon};
    width:90px;
    margin-right: 30px;
`;

const ImgText = ({
    text="Avoid to use card board",
    icon="block",
    src="/cardboard.svg"
}) =>{
    
    return <Container>
        <Icon icon={icon} src={src}/>
        <Text>{text}</Text>
    </Container>
}

export default ImgText;