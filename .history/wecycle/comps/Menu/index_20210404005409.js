import React from 'react'
import styled from 'styled-components';

const MenuCont = styled.div`
display: flex;
justify-content: space-evenly;
  
`;

const BackButton = styled.img`
   
`;

const Title = styled.h3 `
  font-size: 30px;
  color: #393939;
  font-family: 'Fredoka One', sans-serif;
  letter-spacing: 0.07em;
 
`;

const HomeButton = styled.img`
    display: ${props=>props.homebutton};
`;

const Menu = ({
    title="Regions",
    home="block"
}) =>{
    
    return <MenuCont>
        <BackButton src="/back.svg"/>
        <Title>{title}</Title>
        <HomeButton homebutton={home} src="/home.svg"/>
    </MenuCont>
}

export default Menu;