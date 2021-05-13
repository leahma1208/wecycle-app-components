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
    flex-direction:column;
    width: 80vw;
    margin:auto;
   justify-content:center;
}


.margin{
    margin-bottom: 20px;
    
}
#box {
    height: auto;
    width: 100%;
    background-color: #ADBAFF;
    border-radius: 2rem 2rem 0rem 0rem;
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
    
}
`

export default function UrbanEnvironment(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/UrbanCities"title="Environment"></Menu>
            </div>
            
                <div className="container"><Header left="10px"width="350px"text="How is plastic in Oceans affecting the environment?"></Header></div>
            <div className="top">  
                <div className="medal"><Medal text="Keep going you’re halway there!"/></div>
                <div className="margin"><Progress color="#ADBAFF" width="160px;"/></div>
            </div>
            <div id="box" className="container">
                <Header text="Where does this plastic go?" margintop="50px;" marginbottom="0px;"></Header>
                <Bodytext marginbottom="0px;"Text="How does it get into the sea? Plastic left on the ground as litter often blows into creeks and rivers, eventually ending up in the ocean."></Bodytext>
                <MovingImage2 image="/city-enviro-1.svg"/>
                <Bodytext marginbottom="20px;"Text="And because plastic trash is different from other types of waste—it doesn’t decompose back into nature like an apple core or a piece of paper—it stays in the ocean forever."></Bodytext>
                
                <div className="container">
                    <Header marginbottom="40px" text="How can you help?"/>
                    <div className="help"><ImgTxt src="/city-enviro-2.svg" width="70px" text="Use garden safe plastic bags"/></div>
                    <div className="help"><Why bgcolor1="#7E93FF" bgcolor2="#E1E6FF" bottom="65px"/></div>
                    <div className="help"><ImgTxt src="/city-enviro-3.svg" text="Don’t keep plastic laying around"/></div>
                    <div className="help"><Why bgcolor1="#7E93FF" bgcolor2="#E1E6FF" bottom="85px" text="Plastic breaks down into microplastics entering sewers and farmland"/></div>
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