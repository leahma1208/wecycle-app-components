import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Text = styled.p `
    max-width:${props=>props.width};
    font-size: 13px;
    font-weight: 400;
    color: black;
    letter-spacing: 0.05em;
`;

const Img = styled.img`
    display: ${props=>props.medal};
   margin-right:10px;
`;

const Medal = ({
    text="Do you want to earn a  marine badge? Learn about the People, Environment, and Animals ",
    medal="block",
    width="290px;"
}) =>{
    
    return <Container>
        <Img medal={medal} src="/medal.svg"/>
        <Text width={width}>{text} </Text>
    </Container>
}

export default Medal;