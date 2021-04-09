import React from 'react'
import styled from 'styled-components';

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
    
}) =>{
    
    return <ButtonCont>
        
        <Title>{title}</Title>
        <ForwardButton src="/ForwardButton.svg"/>
    </ButtonCont>
}

export default StudyOthers;