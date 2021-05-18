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
    margin-left:-50px;
    
    
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
                <MovingImage2 image="/deadwhale.svg"/>
                <Bodytext marginbottom="20px;"Text="And because plastic trash is different from other types of waste—it doesn’t decompose back into nature like an apple core or a piece of paper—it stays in the ocean forever."></Bodytext>
                
                <div className="container">
                    <Header marginbottom="40px" text="How can you help?"/>
                    <div className="help"><ImgTxt src="/mask.svg" width="70px" text="Throw away your mask"/></div>
                    <div className="help"><Why bgcolor1="#7E93FF" bgcolor2="#E1E6FF" bottom="65px" text="More than 1.56 billion face masks could end up polluting oceans" /></div>
                    <div className="help"><ImgTxt src="/plastics.svg" text="Avoid single use plastic"/></div>
                    <div className="help"><Why bgcolor1="#7E93FF" bgcolor2="#E1E6FF" bottom="85px" text="It takes 450 years or more to break regular plastic down into microplastic"/></div>
                </div>
               
               
                <div className="grid">
                    <Start routeTo="/marineanimals" spacing="2px" text="Next Page >" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                    
                </div>
            </div>
            <div>
                <BottomBar routeTo1="/Oceanpeople"></BottomBar>
            </div>

        </Holder>
    )
}