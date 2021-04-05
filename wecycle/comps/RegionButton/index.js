import React from 'react';
import styled from 'styled-components';

const RegionCont = styled.span`

`;

const RegionInput = styled.button`
    background-color:${props=>props.bg};
    border:none;
    border-radius:25px;
    width: 329px;
    height: 200px;
    position:relative;
`;

const RegionText= styled.p`
    color:#393939;
    font-size:34px;
    font-weight:700;
    position:absolute;
    left:30px;
    font-family: 'Poppins', sans-serif;
`;

const Ellipse = styled.div`
    border-radius: 50%;
    width: 169px;
    height: 169px;
    background-color:${props=>props.ellipseBg};
    position:absolute;
    right:29px;
    top:15px;
`;

const RegionImg = styled.img`
    width:110px;
    height:110px;
    position:absolute;
    top:31px;
    right:25px;
`;

const RegionButton = ({
    text="Region",
    bgcolor="#ADBAFF",
    ellipsecolor="#E1E6FF",
    color="#393939",
    src="/marine.svg"
}) => {

    return <RegionCont>
        <RegionInput bg={bgcolor}>
            <RegionText color={color}>{text}</RegionText>
            <Ellipse ellipseBg={ellipsecolor}>
                <RegionImg src={src}/>
            </Ellipse>
        </RegionInput>
    </RegionCont>
}

export default RegionButton;