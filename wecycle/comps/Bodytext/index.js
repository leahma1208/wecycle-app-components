import React from 'react';
import styled from 'styled-components';


const Container = styled.div `
    display:flex;
    width:${props=>props.textwidth};
    font-weight:${props=>props.fontweight};
    color: ${props=>props.color};
    margin-top: 0px;
    margin-bottom:${props=>props.marginbottom}
`


const Bodytext = ({
    Text="Body text here hi kely tgdzfg dgedfrg dsrfg drfg vdfr vgds frbg dfbg df bd fb",
    textwidth= "330px",
    bold="none",
    color="#393939",
    marginbottom="0px"
}) => {
    return (
        <Container fontweight={bold} textwidth={textwidth} color={color} marginbottom={marginbottom}>
            <p >{Text}</p>
        </Container>

    )
}

export default Bodytext;