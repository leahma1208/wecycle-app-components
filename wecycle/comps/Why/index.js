import React from 'react'
import styled from 'styled-components';


const Cont = styled.div`
display:flex;
position:relative;

  
`;

const WhyCont = styled.div`
width:80px;
height:35px;
background-color:${props=>props.bgcolor1};
color:white;
font-size: 12px;
font-weight: 700;
letter-spacing: 0.1em;
border-radius: 10px;
display:flex;
justify-content: center;
align-items: center;
position:absolute;
left: -25px;
bottom: ${props=>props.bottom};

`;


const InfoCont = styled.div`
max-width: 290px;
min-height: 56px;
background-color:${props=>props.bgcolor2};
border-radius: 12px;
font-size: 14px;
display:flex;
justify-content: center;
align-items: center;
text-align:center;


padding:20px;

`;





const Why = ({
text="Regular plastic bags seep chemicals into the ground",
bgcolor1="#7E93FF",
bgcolor2="#E1E6FF",
bottom="75px"

}) => {


    return (
        <Cont>
            <WhyCont bgcolor1={bgcolor1} bottom={bottom}>Why?</WhyCont>
            <InfoCont bgcolor2={bgcolor2}>{text}</InfoCont>
        </Cont>
    )
}
   

export default Why;