import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const RegionCont = styled.div`
    margin-top:2.188rem;
    margin-bottom:1.125rem;
    
    
`;

const RegionInput = styled.button`
    background-color:${props=>props.bg};
    border:none;
    border-radius:25px;
    width: 329px;
    height: 200px;
    position:relative;
   
    :hover{
        opacity:0.8;
     }
`;

const RegionText= styled.p`
    color:#393939;
    font-size:30px;
    font-weight:400;
    position:absolute;
    left:30px;
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
    height="110px",
    routeTo="/Marine",
}) => {

    const router = useRouter();

    return <RegionCont onClick={()=>router.push(routeTo)}>
        <RegionInput bg={bgcolor}>
            <RegionText className="fredo" color={color}>{text}</RegionText>
            <Ellipse ellipseBg={ellipsecolor}>
                <RegionImg src={src} width={width} height={height}/>
            </Ellipse>
        </RegionInput>
    </RegionCont>
}

export default RegionButton;