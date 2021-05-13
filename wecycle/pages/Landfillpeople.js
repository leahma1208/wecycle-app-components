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
    margin-bottom: 70px;
}
.help2{
    margin-bottom: 40px;
    
}
`

export default function LandfillPeople(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/Landfills"title="People"></Menu>
            </div>
            <div className="container">
                <Header left="10px" text="How is plastic in landfills affecting people?"></Header>
                <Medal text="Do you want to earn a Landfill Badge? Learn about the People, Environment, and Animals"/>
                <Progress color="#FFEAAD"/>
            </div>
            <div id="box" className="container">
                <Header text="Landfill sites" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="Canadians produce a lot of plastic waste an estimated 3.3 million tonnes per year."></Bodytext>
                <MovingImage2 image="/cntower.png"/>
                <Bodytext marginbottom="20px;"Text="This means our community is running out of space to store our garbage waste. Without space to store our garbage we would have even more pollution!"></Bodytext>
                <MovingImage2 image="/waste2.svg"/>
                <Header text="How Can You Help?" margintop="50px;"></Header>
                <div className="help">
                <ImgText src="/plant.png" width="90px" text="Reuse what you can!"></ImgText>
                </div>
                <div className="help2">
                <Why bgcolor1="#FFD862" bgcolor2="#FFF7DE" text="Reusing materials again can take fewer resources from the Earth"></Why>
                </div>
                <div className="help">
                <ImgText src="/plastics.svg" width="90px" text="Avoid to using single use plastics!"></ImgText>
                </div>
                <Why bgcolor1="#FFD862" bgcolor2="#FFF7DE" text="It accounts for the largest proportion of landfills"></Why>
                <div className="grid">
                    <Start routeTo="/LandfillEnvironment" spacing="2px" text="Next Page >" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                </div>
            </div>
            <div>
                <BottomBar routeTo1="/Landfills"></BottomBar>
            </div>
        </Holder>
    )
}