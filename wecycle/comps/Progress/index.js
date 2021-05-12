import React from 'react'
import styled from 'styled-components';


const Cont = styled.div`
display: flex;
flex-direction: column;


  
`;

const Text = styled.div`
font-size: 13px;
margin-bottom: 5px;
font-weight:700;
letter-spacing: 0.1em;
`;


const Bar = styled.div`
width: 320px;
height: 10px;
background-color:#C4C4C4;
`;

const BarColor = styled.div`
width: ${props=>props.width};
height: 10px;
background-color: ${props=>props.color};
position: relative;
bottom:10px;

`;




const Progress = ({
width="30px",
color="#ADBAFF"
}) => {


    return (
        <Cont>
            <Text>Your Progress:</Text>
            <Bar></Bar>
            <BarColor width={width} color={color}></BarColor>
        </Cont>
    )
}
   

export default Progress;