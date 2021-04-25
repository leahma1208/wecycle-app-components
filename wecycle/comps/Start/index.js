import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Container = styled.div`
    display:flex;
    background-color: #E87C4B;
    justify-content:center;
    width:${props=>props.width};
    border-radius:${props=>props.radius};
    margin-top:${props=>props.margintop};
    margin-bottom:${props=>props.marginbottom};

    
   :hover{
       background-color:#E8936C;
   }


`
const Button = styled.div`
    display:flex;
    flex-direction:column;
    padding:${props=>props.padding};
    margin:0.5rem;
    color:white;
    display:flex;
    font-family: ${props=>props.fontfamily};
    letter-spacing: ${props=>props.spacing};
    font-size: ${props=>props.fontsize};
    justify-content:center;
    align-items:center;

    
    :hover{
        background-color:#E8936C;
    }
    
    
`




const Start = ({
    margintop="2rem",
    marginbottom="3rem",
    radius="10px",
    width="18em",
    fontfamily="'Fredoka One', cursive",
    fontsize="30px",
    text= "START",
    spacing="0.25rem",
    routeTo="/Home",
    padding="25px"

}) => {

    const router = useRouter();

    return (
        <Container className="start" onClick={()=>router.push(routeTo)} radius={radius} width={width} margintop={margintop} marginbottom={marginbottom}>
        <Button fontsize={fontsize} fontfamily={fontfamily} spacing={spacing} padding={padding}>    
        {text}     
        </Button>
        </Container>
    )
}

export default Start;