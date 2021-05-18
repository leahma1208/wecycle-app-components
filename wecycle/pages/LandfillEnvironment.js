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
    margin-top: 20px;
}

.row {
    display:flex;
    justify-content:center
    width: 100%;
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

export default function LandfillEnvironment(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/Landfills"title="Environment"></Menu>
            </div>
            <div className="container">
                <Header left="10px" text="How is plastic in landfill affecting the Environment?"></Header>
                <Medal text="Keep going you’re halfway there!"/>
                <Progress color="#FFEAAD" width="160px;"/>
            </div>
            <div id="box" className="container">
                <Header text="Our decomposers are slowly dying" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="Microplastic pollution in landfills causes significant damage to populations of soil-dwelling mites, larvae and other tiny creatures that maintain the fertility of the land"></Bodytext>
                <MovingImage2 image="/worm.svg"/>
                <Bodytext marginbottom="20px;"Text="Without insects to help break down and dispose of wastes, dead animals and plants would accumulate in our environment."></Bodytext>
                <MovingImage2 image="/compost.svg"/>
                <Header text="How Can You Help?" margintop="50px;"></Header>
                <div className="help">
                <ImgText src="/exterminate.svg" width="100px" text="Don’t use chemicals to exterminate insects"></ImgText>
                </div>
                <div className="help">
                <Why bgcolor1="#FFD862" bgcolor2="#FFF7DE" text="The chemicals will kill insects we need to decompose"></Why>
                </div>
                <div className="help">
                <ImgText src="/plasticbag.svg" width="90px" text="Avoid to using plastic bag"></ImgText>
                </div>
                <Why bgcolor1="#FFD862" bgcolor2="#FFF7DE" text="A plastic bag takes the longest to decompose"></Why>
                <div className="grid">
                    <Start routeTo="/LandfillAnimals" spacing="2px" text="Next Page >" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                </div>
            </div>
            <div>
                <BottomBar routeTo1="/Landfillpeople"></BottomBar>
            </div>
        </Holder>
    )
}