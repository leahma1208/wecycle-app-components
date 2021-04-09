import React from 'react';
import styled from 'styled-components';

const RegionCont = styled.div`
    margin-bottom:18px;
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
    font-size:30px;
    font-weight:700;
    position:absolute;
    left:30px;
    font-family: 'Poppins', sans-serif;
    z-index:10000;
    margin-top: 46px;
`;

const Ellipse = styled.div`
    border-radius: 50%;
    width: 169px;
    height: 169px;
    background-color:${props=>props.ellipseBg};
    position:absolute;
    right:29px;
    top:15px;
    display:flex;
`;

const RegionImg = styled.img`
    width:${props=>props.width};
    height:${props=>props.height};
    margin-left: auto;
    margin-right: auto;
    margin-top:auto;
    margin-bottom:auto;
    
`;

const RegionButton = ({
    text="Region",
    bgcolor="#ADBAFF",
    ellipsecolor="#E1E6FF",
    color="#393939",
    src="/marine.svg",
    width="110px",
    height="110px"
}) => {

    return <RegionCont>
        <RegionInput bg={bgcolor}>
            <RegionText color={color}>{text}</RegionText>
            <Ellipse ellipseBg={ellipsecolor}>
                <RegionImg src={src} width={width} height={height}/>
            </Ellipse>
        </RegionInput>
    </RegionCont>
}

export default RegionButton;