import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    width: ${props=>props.width};
`;

const Text = styled.p `
    margin-top:${props=>props.margintop};
    font-size: ${props=>props.fontsize};
    font-weight: ${props=>props.weight};
    font-family: ${props=>props.fontfamily};
    color: ${props=>props.color};
    letter-spacing: 0.07em;
    margin-bottom: ${props=>props.marginbottom};
    margin-left: ${props=>props.left};
`;


const Header = ({
    fontfamily="Poppins",
    fontsize="25px",
    weight="bold",
    color="#393939",
    text="Here are some organizations you can volunteer with!",
    margintop="20px",
    width="329px",
    left="0rem",
    marginbottom="20px"
}) =>{
    
    return <Container width={width}>
        <Text marginbottom={marginbottom} left={left} fontfamily={fontfamily} fontsize={fontsize} weight={weight} color={color} margintop={margintop}>
            {text}
        </Text>
    </Container>
}

export default Header;