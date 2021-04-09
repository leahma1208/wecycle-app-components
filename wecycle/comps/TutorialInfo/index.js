import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    width:15em;
    margin-bottom:"4rem";
`;

const Text = styled.p `
    font-size: 16px;
    font-weight: 500;
    color: white;
    letter-spacing: 0.07em;
`;

const Info = styled.img`
    display: ${props=>props.icon};
    width: 20px;
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