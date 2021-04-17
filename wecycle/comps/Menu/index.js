import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

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
    borderbottom="3px solid #E3E3E3",
    routeTo="../",
    homeTo="/regions"
}) =>{

    const router = useRouter();
    const homebutton = useRouter();
    
    return <MenuCont borderbottom={borderbottom}>
        <BackButton onClick={()=>router.push(routeTo)} src="/back.svg"/>
        <Title className="fredo">{title}</Title>
        <HomeButton onClick={()=>homebutton.push(homeTo)} homebutton={home} src="/home.svg"/>
    </MenuCont>
}

export default Menu;