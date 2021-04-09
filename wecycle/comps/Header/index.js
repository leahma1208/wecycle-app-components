import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    width:30rem;
`;

const Text = styled.p `
    font-size: 25px;
    font-weight: bold;
    color: black;
    letter-spacing: 0.07em;
`;


const Header = ({
    text="Here are some organizations you can volunteer with!",
}) =>{
    
    return <Container>
        <Text>{text}</Text>
    </Container>
}

export default Header;