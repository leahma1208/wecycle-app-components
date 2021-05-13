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

.medal{
    margin-bottom: 20px;
   display:flex;
   align-itmes: start;
   margin-left:-50px;
    
}
`

export default function UrbanEnvironment(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/UrbanCities"title="Environment"></Menu>
            </div>
            
            <div className="container"><Header left="10px"width="350px"text="How is plastic in Urban Cities affecting the Environment?"></Header></div>
            <div className="top">  
                <div className="medal"><Medal text="Keep going you’re halway there!"/></div>
                <div className="margin"><Progress color="#AFDDCD" width="160px;"/></div>
            </div>
            <div id="box" className="container">
                <Header text="Plastic in our Environment" margintop="50px;" marginbottom="0px;"></Header>
                <Bodytext marginbottom="0px;"Text="Plastic can release harmful chemicals into the surrounding soil, which can then seep into groundwater or other surrounding water sources, and also the ecosystem. "></Bodytext>
                <MovingImage2 image="/city-enviro-1.svg"/>
                <Bodytext marginbottom="20px;"Text="This can cause a range of potentially harmful effects on the species that drink the water."></Bodytext>
                
                <div className="container">
                    <Header marginbottom="40px" text="How can you help?"/>
                    <div className="help"><ImgTxt src="/city-enviro-2.svg" width="70px" text="Use garden safe plastic bags"/></div>
                    <div className="help"><Why bgcolor1="#76BCA5" bgcolor2="#D4F5EA" bottom="65px"/></div>
                    <div className="help"><ImgTxt src="/city-enviro-3.svg" text="Don’t keep plastic laying around"/></div>
                    <div className="help"><Why bgcolor1="#76BCA5" bgcolor2="#D4F5EA" bottom="85px" text="Plastic breaks down into microplastics entering sewers and farmland"/></div>
                </div>
               
               
                <div className="grid">
                    <Start routeTo="/UrbanAnimals" spacing="2px" text="Next Page >" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                    
                </div>
            </div>
            <div>
                <BottomBar routeTo1="/UrbanPeople"></BottomBar>
            </div>

        </Holder>
    )
}