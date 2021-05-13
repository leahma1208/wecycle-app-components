// import Head from 'next/.head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import Bodytext from '../comps/Bodytext';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';
import BottomBar from '../comps/BottomBar';
import MovingImage2 from '../comps/MovingImage2';
import Medal from '../comps/Medal';
import Progress from '../comps/Progress'
import ImgTxt from '../comps/ImgText'
import Why from '../comps/Why'


const Holder = styled.div `
.container {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.margin{
    margin-bottom: 20px;
    
}
#box {
    height: auto;
    width: 100%;
    background-color: #AFDDCD;
    border-radius: 3rem 3rem 0rem 0rem;
    margin-top: 1rem;
}

.row {
    display:flex;
    justify-content:center
    width:100%;
}

#image {
    display:flex;
    margin-left:30px;
}
.grid {
   display:flex;
   justify-content:center;
   margin-bottom: 80px;
}

.moving {
    position: relative;
    overflow: hidden;
    animation: slideIn 3s infinite;
    animation-direction:reverse;
}
@keyframes slideIn {
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(7deg);
    }
    100%{
        transform: rotate(0deg);
    }
}


.help{
    margin-bottom: 50px;
    
}
`

export default function UrbanPeople(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/UrbanCities"title="People"></Menu>
            </div>
            <div className="container">
                <Header left="10px"width="350px"text="How are plastics in Urban Cities affecting people?"></Header>
                
                <div className="margin"><Medal text="Do you want to earn a cities badge? Learn about the People, Environment, and Animals "/></div>
                <div className="margin"><Progress color="#AFDDCD"/></div>
            </div>
            <div id="box" className="container">
                <Header text="Plastic in our city" margintop="50px;" marginbottom="0px;"></Header>
                <Bodytext marginbottom="0px;"Text="Of the 34.5 million tons of plastic waste generated each year, only 9 percent is recycled, with most of the recyclable waste shipped to other countries for processing."></Bodytext>
                <MovingImage2 image="/city-people-plastic.svg"/>
                <Bodytext marginbottom="20px;"Text="However, because recipient countries often lack the infrastructure to properly dispose of these materials, waste becomes in ecosystems around the world."></Bodytext>
                
                <div className="container">
                    <Header marginbottom="40px" text="How can you help?"/>
                    <div className="help"><ImgTxt/></div>
                    <div className="help"><Why bgcolor1="#76BCA5" bgcolor2="#D4F5EA" bottom="70px" text="The most common waste in the city is the card board"/></div>
                    <div className="help"><ImgTxt src="/coffeecups.svg" text="Don't throw coffee cups on the street."/></div>
                    <div className="help"><Why bgcolor1="#76BCA5" bgcolor2="#D4F5EA" bottom="70px" text="It's the most trash thrown away on the streets of the city"/></div>
                </div>
               
               
                <div className="grid">
                    <Start routeTo="/UrbanEnvironment" spacing="2px" text="Next Page >" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                    
                </div>
            </div>
            <div>
                <BottomBar routeTo1="/UrbanCities"></BottomBar>
            </div>

        </Holder>
    )
}