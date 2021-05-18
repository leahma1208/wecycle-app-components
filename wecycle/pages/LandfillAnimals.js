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
import Progress from '../comps/Progress';
import Why from '../comps/Why';
import ImgText from '../comps/ImgText';


const Holder = styled.div `
.container {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center
}

#box {
    height: auto;
    background-color: #FEE9A8;
    border-radius: 3rem 3rem 0rem 0rem;
    width: 100%;
    margin-top:20px;
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

export default function LandfillAnimals(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/Landfills"title="Animals"></Menu>
            </div>
            <div className="container">
                <Header left="10px" text="How is plastic in landfill affecting animals?"></Header>
                <Medal text="So close! Scroll to the bottom to recieve your badge"/>
                <Progress color="#FFEAAD" width="320px;"/>
            </div>
            <div id="box" className="container">
            <Header text="Animals Rely on Landfill for Food" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="Certain animals may begin to rely on the landfill for food. Which also results in ingesting plastic."></Bodytext>
                <MovingImage2 image="/seagull.png"/>
                <Bodytext marginbottom="20px;"Text="It encourages bad habits in the local wildlife population depending on what exactly it is your company throws into a landfill."></Bodytext>
                <MovingImage2 image="/bird.png"/>
                <Header text="How Can You Help?" margintop="50px;"></Header>
                <div className="help">
                <ImgText src="/can.svg" width="70px" text="Always recycle aluminum cans!"></ImgText>
                </div>
                <div className="help">
                <Why bgcolor1="#FFD862" bgcolor2="#FFF7DE" text="Aluminum cans end up in landfills which becomes food for animals"></Why>
                </div>
                <div className="help">
                <ImgText src="/cup.svg" width="50px" text="Recycle plastic cups!"></ImgText>
                </div>
                <Why bgcolor1="#FFD862" bgcolor2="#FFF7DE" text="Birds can mistakenly consume plastics in the landfill!"></Why>
                <div className="grid">
                    <Start routeTo="/LandfillQuiz" spacing="2px" text="Earn your badge" fontsize="16px" width="250px" padding="10px" height="52px" marginright="7px"></Start>
                </div>
            </div>
            <div>
                <BottomBar routeTo1="/LandfillEnvironment"></BottomBar>
            </div>
        </Holder>
    )
}