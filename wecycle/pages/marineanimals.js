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

.top {
    display:flex;
    align-items:center;
    flex-direction:column;
    width: 100%;
}


.margin{
    margin-bottom: 20px;
    
}
#box {
    height: auto;
    width: 100%;
    background-color: #ADBAFF;
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

.medal{
    margin-bottom: 20px;
    
    
}
`

export default function UrbanEnvironment(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/UrbanCities"title="Animals"></Menu>
            </div>
            
                <div className="container"><Header left="10px"width="350px"text="Sea Turtles"></Header></div>
            <div className="top">  
                <div className="medal"><Medal text="So close! Scroll to the bottom to recieve your badge"/></div>
                <div className="margin"><Progress color="#ADBAFF" width="320px;"/></div>
            </div>
            <div id="box" className="container">
                <Header text="Sea Turtles" margintop="50px;" marginbottom="0px;"></Header>
                <Bodytext marginbottom="0px;"Text="A sea turtle swims through the water and spots a white blob floating near the surface. “Yum!” it thinks."></Bodytext>
                <MovingImage2 image="/seaturtles.svg"/>
                <Bodytext marginbottom="20px;" Text="“A jellyfish!” Chasing after its dinner, the turtle swallows the item. But the floating blob isn’t a jelly—it’s a plastic bag that could make the sea turtle sick."></Bodytext>
                <MovingImage2 image="/jellyfish.svg"/>

                <div className="container">
                    <Header marginbottom="40px" text="How can you help?"/>
                    <div className="help"><ImgTxt src="/straws.svg" width="70px" text="Use reusable straws!"/></div>
                    <div className="help"><Why text="Plastic straws get stuck on turtles nose!" bgcolor1="#7E93FF" bgcolor2="#E1E6FF" bottom="65px"/></div>
                    <div className="help"><ImgTxt src="/bag.svg" text="Reuse plastic bags"/></div>
                    <div className="help"><Why text="Marine animals mistakenly eat plastic bags!" bgcolor1="#7E93FF" bgcolor2="#E1E6FF" bottom="85px" text="Plastic breaks down into microplastics entering sewers and farmland"/></div>
                </div>
               
               
                <div className="grid">
                <Start routeTo="/marinequiz" spacing="2px" text="Earn your badge" fontsize="16px" width="250px" padding="10px" height="52px" marginright="7px"></Start>
                    
                </div>
            </div>
            <div>
                <BottomBar routeTo1="/marineenviro"></BottomBar>
            </div>

        </Holder>
    )
}