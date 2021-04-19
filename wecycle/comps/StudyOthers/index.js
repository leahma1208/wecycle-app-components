import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonCont = styled.div`
display: flex;
justify-content: space-evenly;
  
`;

const ForwardButton = styled.img`
color: #393939;
margin-left: 15px;
`;

const Title = styled.h3 `
  font-size: 20px;
  color: #393939;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.07em;
 
`;



const StudyOthers = ({
    title="Study Other Regions",
    routeTo ="/regions"
    
}) =>{
    const router = useRouter();

    return <ButtonCont onClick={()=>router.push(routeTo)}>
        
        <Title>{title}</Title>
        <ForwardButton src="/ForwardButton.svg"/>
    </ButtonCont>
}

export default StudyOthers;