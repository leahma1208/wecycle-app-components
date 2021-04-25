import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import react, {useState} from 'react';

const MenuCont = styled.div`
display: flex;
justify-content: space-evenly;
border-bottom: ${props=>props.borderbottom};
flex-direction:column;

  
`;

const Contholder = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    border-radius: 0px 0px 20px 20px;
    box-shadow: 3px 18px 50px -21px rgba(0,0,0,0.48);
    max-width:${props=>props.width}%;
    max-height:${props=>props.height}px;
    overflow:hidden;
    transition: max-width 0s, max-height 1s;

`

const Menuholder = styled.div`
display:flex;
flex:1;
justify-content: space-evenly;
`

const MenuButton = styled.img`
    width:30px;
`;

const Title = styled.h3 `
  font-size: 30px;
  color: #393939;
  letter-spacing: 0.07em;
 
`;

const HomeButton = styled.img`
    display: ${props=>props.homebutton};
`;

const Arrow1 = styled.img `
width:12px;
color:#5769DF;
transform: ${props=>props.rotate};
transition:transform 0.2s;
`

const Arrow2 = styled.img `
width:12px;
color:#5769DF;
transform: ${props=>props.rotate2};
transition:transform 0.2s;
`

const Arrow3 = styled.img `
width:12px;
color:#5769DF;
transform: ${props=>props.rotate3};
transition:transform 0.2s;
`


const RegionHolder = styled.div`
display:flex;
justify-content:space-between;
border-top:solid #E3E3E3;
padding:20px;

`

const RegionHolder2 = styled.div`
display:flex;
justify-content:space-between;
border-top:solid #E3E3E3;
padding:20px;
`

const RegionHolder3 = styled.div`
display:flex;
justify-content:space-between;
border-top:solid #E3E3E3;
padding:20px;
`


const Marine = styled.div``

const UrbanCities = styled.div``

const Landfill = styled.div``

const Infoholder = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:80px;
    padding-bottom:20px;
    max-height:${props=>props.subheight}px;
    max-width:${props=>props.subwidth}%;
    display:${props=>props.display};
    over-flow:hidden;
    transition:max-height 1s;
`

const Infoholder2 = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:80px;
    padding-bottom:20px;
    max-height:${props=>props.subheight2}px;
    max-width:${props=>props.subwidth2}%;
    display:${props=>props.display2};
    over-flow:hidden
`

const Infoholder3 = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:80px;
    padding-bottom:20px;
    max-height:${props=>props.subheight3}px;
    max-width:${props=>props.subwidth3}%;
    display:${props=>props.display3};
    over-flow:hidden
`

const Quitime = styled.div``

const People = styled.div``
const Environment = styled.div``
const Animals = styled.div``
const Howto = styled.div``
const Volunteer = styled.div``

const Menu = ({
    title="Programs",
    home="block",
    borderbottom="3px solid #E3E3E3",
    routeToMarine="/Marine",
    routeToUrban="/UrbanCities",
    routeToLandfill="/Landfills",
    routeToMarinePeople="/Oceanpeople",
    routeToMarineEnvironment="/marineenviro",
    routeToMarineAnimals="/marineanimals",
    routeToMarineQuiz="/marinequiz",
    routeToMarineHowto="/Help",
    routeToMarineVolunteer="/Programs",

    routeToUrbanPeople="/UrbanPeople",
    routeToUrbanEnvironment="/UrbanEnvironment",
    routeToUrbanAnimals="/UrbanAnimals",
    routeToUrbanQuiz="/UrbanQuiz",
    routeToUrbanHowto="/HelpUrban",
    routeToUrbanVolunteer="/ProgramsUrban",

    routeToLandfillPeople="/Landfillpeople",
    routeToLandfillEnvironment="/LandfillEnvironment",
    routeToLandfillAnimals="/LandfillAnimals",
    routeToLandfillQuiz="/LandfillQuiz",
    routeToLandfillHowto="/HelpLandfill",
    routeToLandfillVolunteer="/ProgramsLandfill",
    
    

    
}) =>{

// ============for categories===============
    const [open, setOpen] = useState(false);

    var width = 0;
    var height = 0;
    var borderbottom = "3px solid #E3E3E3";
    
    if(open){
        width = 100;
        height = 1000;
        var borderbottom = "none";
    }

// ============for subcategories marine===============

    const [opensub, setOpensub] = useState(false);

    var subwidth = 0;
    var subheight= 0;
    var display= "none";
    var rotate= "rotate(0deg)"

    if(opensub){
        subwidth=100;
        subheight=200;
        display="block"
        rotate="rotate(90deg)"
    }

// ============for subcategories urban cities===============

    const [opensub2, setOpensub2] = useState(false);

    var subwidth2 = 0;
    var subheight2= 0;
    var display2= "none";
    var rotate2= "rotate(0deg)";

    if(opensub2){
        subwidth2=100;
        subheight2=200;
        display2="block"
        rotate2="rotate(90deg)"
    }

// ============for subcategories landfill===============

const [opensub3, setOpensub3] = useState(false);

var subwidth3 = 0;
var subheight3= 0;
var display3= "none";
var rotate3= "rotate(0deg)";

if(opensub3){
    subwidth3=100;
    subheight3=200;
    display3="block"
    rotate3="rotate(90deg)"
}


    const router = useRouter();
    
    return (
    <MenuCont borderbottom={borderbottom}>
        <Menuholder>
            <MenuButton  src="/burgermenu.svg" onClick={()=>setOpen(!open)} />
            <Title className="fredo">{title}</Title>
            <HomeButton homebutton={home}/>
        </Menuholder>
        <Contholder width={width} height={height}>
            <RegionHolder onClick={()=>setOpensub(!opensub)}>
                <Marine onClick={()=>router.push(routeToMarine)} className="region" >Marine</Marine>
                <Arrow1 rotate={rotate} src="/right-arrow.svg"></Arrow1>
            </RegionHolder>
                <Infoholder subheight={subheight} subwidth={subwidth} display={display}>
                    <People onClick={()=>router.push(routeToMarinePeople)} >People</People>
                    <Environment onClick={()=>router.push(routeToMarineEnvironment)} >Environment</Environment>
                    <Animals onClick={()=>router.push(routeToMarineAnimals)} >Animals</Animals>
                    <Howto onClick={()=>router.push(routeToMarineHowto)}>How to recycle</Howto>
                    <Volunteer onClick={()=>router.push(routeToMarineVolunteer)} >Volunteer</Volunteer>
                    <Quitime onClick={()=>router.push(routeToMarineQuiz)} >Quiz Time</Quitime>
                </Infoholder>
            <RegionHolder2 onClick={()=>setOpensub2(!opensub2)}>
                <UrbanCities className="region" onClick={()=>router.push(routeToUrban)} >Urban Cities</UrbanCities>
                <Arrow2 rotate2={rotate2} src="/right-arrow.svg"></Arrow2>
            </RegionHolder2 >
                <Infoholder2 subheight2={subheight2} subwidth2={subwidth2} display2={display2} >
                    <People onClick={()=>router.push(routeToUrbanPeople)} >People</People>
                    <Environment onClick={()=>router.push(routeToUrbanEnvironment)}>Environment</Environment>
                    <Animals onClick={()=>router.push(routeToUrbanAnimals)}>Animals</Animals>
                    <Howto onClick={()=>router.push(routeToUrbanHowto)}>How to recycle</Howto>
                    <Volunteer onClick={()=>router.push(routeToUrbanVolunteer)}>Volunteer</Volunteer>
                    <Quitime onClick={()=>router.push(routeToUrbanQuiz)}>Quiz Time</Quitime>
                </Infoholder2>
            <RegionHolder3 onClick={()=>setOpensub3(!opensub3)}>
                <Landfill onClick={()=>router.push(routeToLandfill)} className="region" >Landfill</Landfill>
                <Arrow3 rotate3={rotate3} src="/right-arrow.svg"></Arrow3>
            </RegionHolder3>
            <Infoholder3 subheight3={subheight3} subwidth3={subwidth3} display3={display3}>
                <People onClick={()=>router.push(routeToLandfillPeople)} >People</People>
                <Environment onClick={()=>router.push(routeToLandfillEnvironment)}>Environment</Environment>
                <Animals onClick={()=>router.push(routeToLandfillAnimals)}>Animals</Animals>
                <Howto onClick={()=>router.push(routeToLandfillHowto)}>How to recycle</Howto>
                <Volunteer onClick={()=>router.push(routeToLandfillVolunteer)}>Volunteer</Volunteer>
                <Quitime onClick={()=>router.push(routeToLandfillQuiz)}>Quiz Time</Quitime>
            </Infoholder3>

            {/* <Marine className="region" >Marine</Marine>
            <UrbanCities className="region" >Urban Cities</UrbanCities>
            <Landfill className="region" >Landfill</Landfill> */}
        </Contholder>
    </MenuCont>
    )
}

export default Menu;