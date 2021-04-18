import React from 'react';
import styled from 'styled-components';


const Container = styled.div `
    display:flex;
    width:${props=>props.textwidth};
    font-weight:${props=>props.fontweight};
    color: ${props=>props.color};
`


const Bodytext = ({
    Text="Body text here hi kely tgdzfg dgedfrg dsrfg drfg vdfr vgds frbg dfbg df bd fb",
    textwidth= "330px",
    bold="none",
    color="#393939"
}) => {
    return (
        <Container fontweight={bold} textwidth={textwidth} color={color}>
            <p >{Text}</p>
        </Container>

    )
}

export default Bodytext;