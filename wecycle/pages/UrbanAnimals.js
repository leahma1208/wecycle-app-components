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
    
}
`

export default function UrbanAnimals(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/UrbanCities"title="Animals"></Menu>
            </div>
            
                <div className="container"><Header left="10px"width="350px"text="How is plastic in urban cities Affecting animals?"></Header>
    
                <div className="medal"><Medal text="So close! Scroll to the bottom to recieve your badge"/></div>
                <div className="margin"><Progress color="#AFDDCD" width="320px;"/></div>
                </div>
            <div id="box" className="container">
                <Header text="Plastic waste in our ecosystem" margintop="50px;" marginbottom="0px;"></Header>
                <Bodytext marginbottom="0px;"Text="Plastic waste contaminates all major ecosystems on the planet, with concern increasing about its potential impacts on wildlife and human health."></Bodytext>
                <MovingImage2 image="/city-animals-1.svg"/>
                <Bodytext marginbottom="20px;"Text="Elsewhere, a flamingo strangles itself on a bag, unable to twist its way out of the entangling plastic."></Bodytext>
                <MovingImage2 image="/city-animals-2.svg"/>
                
                <div className="container">
                    <Header marginbottom="40px" text="How can you help?"/>
                    <div className="help"><ImgTxt src="/city-animals-3.svg" width="90px" text="Don’t recycle 
plastic bags"/></div>
                    <div className="help"><Why bgcolor1="#76BCA5" bgcolor2="#D4F5EA" bottom="50px" text="Animals get entangled in plastics."/></div>
                    <div className="help"><ImgTxt src="/city-animals-4.svg" width="80px" text="Don’t recycle 
caps/lids"/></div>
                    <div className="help"><Why bgcolor1="#76BCA5" bgcolor2="#D4F5EA" bottom="65px" text="Animals mistakenly consume plastics."/></div>
                </div>
               
               
                <div className="grid">
                    <Start routeTo="/UrbanQuiz" spacing="2px" text="Earn your badge" fontsize="16px" width="250px" padding="10px" height="52px" marginright="7px"></Start>
                    
                </div>
            </div>
            <div>
                <BottomBar routeTo1="/UrbanEnvironment"></BottomBar>
            </div>

        </Holder>
    )
}