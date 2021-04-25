import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Container = styled.div`
    display:flex;
    background-color: #8492ED;
    justify-content:center;
    width:18em;
    border-radius:10px;
    background-color: ${props=>props.backcolor};

    :hover{
        background-color:#98A4F3;
    }
      
`

const Button = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    border-radius:10px;
    margin:0.1rem;
    color:${props=>props.textcolor};
    display:flex;
    font-weight: bold;
    letter-spacing: 0.25rem;
    font-size: 16px;
    justify-content:center;
    align-items:center;
    padding:15px;
    
`




const Tutorial = ({
    backcolor= "#8492ED",
    textcolor= "white",
    text="READ TUTORIAL",
    routeTo="/Tutorial",
    

}) => {
    const router = useRouter();

    return (
        <Container className="tutorial" onClick={()=>router.push(routeTo)}>
        <Button backcolor={backcolor} textcolor={textcolor}>
          
                {text}
            
        </Button>
        </Container>
    )
}

export default Tutorial;