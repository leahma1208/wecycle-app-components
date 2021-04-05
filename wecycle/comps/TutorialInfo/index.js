import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: lightgrey;
    width:15em;
`;

const Text = styled.p `
    font-size: 10px;
    font-weight: 500;
    color: white;
    letter-spacing: 0.07em;
`;

const Info = styled.img`
    display: ${props=>props.icon};
`;

const TutorialInfo = ({
    text="For parents/Instructors",
    icon="block"
}) =>{
    
    return <Container>
        <Info icon={icon} src="/info.svg"/>
        <Text>{text}</Text>
    </Container>
}

export default TutorialInfo;