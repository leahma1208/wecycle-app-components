import React from 'react'
import styled from 'styled-components';

const MenuCont = styled.div`
display: flex;
justify-content: space-evenly;
border-bottom: ${props=>props.borderbottom};
  
`;

const BackButton = styled.img`
   
`;

const Title = styled.h3 `
  font-size: 30px;
  color: #393939;
  letter-spacing: 0.07em;
 
`;

const HomeButton = styled.img`
    display: ${props=>props.homebutton};
`;

const Menu = ({
    title="Programs",
    home="block",
    borderbottom="3px solid #E3E3E3"
}) =>{
    
    return <MenuCont borderbottom={borderbottom}>
        <BackButton src="/back.svg"/>
        <Title className="fredo">{title}</Title>
        <HomeButton homebutton={home} src="/home.svg"/>
    </MenuCont>
}

export default Menu;