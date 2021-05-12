import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Container = styled.div`
    display:flex;
    justify-content:center;
    margin-top:${props=>props.margintop};
    margin-bottom:${props=>props.marginbottom};
    margin-right:${props=>props.marginright};
    margin-left:${props=>props.marginleft};
`;
const Ellipse = styled.div`
    display:flex;
    border-radius: 50%;
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgcolor};
    box-shadow: ${props=>props.shadow};
    margin-bottom:60px;
`;

const EllipseImage = styled.img`
align-items: center;
margin-left: auto;
margin-right: auto;
width:128px;
src: ${props=>props.src};
`;

const TakeAction = ({
    margintop="0px",
    marginbottom="0px",
    marginright="0px",
    marginleft="0px",
    width="247px",
    height="247px",
    bgcolor="#CED6FE",
    src="clickVolunteer.svg",
    routeTo="/programs",
    shadow="0px 0px 43px rgba(112, 134, 255, 0.54)"


}) => {
    const router = useRouter();

    return(
        <Container>
            <Ellipse onClick={()=>router.push(routeTo)} width={width} height={height} bgcolor={bgcolor} shadow={shadow}>
                <EllipseImage src={src}/>
            </Ellipse>
        </Container>
    )
}

export default TakeAction;