import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    width: 329px;
`;

const Text = styled.p `
    padding:0;
    margin-top:0.25rem;
    font-size: ${props=>props.fontsize};
    font-weight: ${props=>props.weight};
    font-family: ${props=>props.fontfamily};
    color: ${props=>props.color};
    letter-spacing: 0.07em;
`;


const Header = ({
    fontfamily="Poppins",
    fontsize="25px",
    weight="bold",
    color="black",
    text="Here are some organizations you can volunteer with!",
}) =>{
    
    return <Container>
        <Text fontfamily={fontfamily} fontsize={fontsize} weight={weight} color={color}>
            {text}
        </Text>
    </Container>
}

export default Header;