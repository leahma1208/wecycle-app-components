// import Head from 'next/.head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import Bodytext from '../comps/Bodytext';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';
import BottomBar from '../comps/BottomBar';
import MovingImage2 from '../comps/MovingImage2';


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
    border-radius: 5rem 5rem 0rem 0rem;
    min-width: 25rem;
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
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom:60px;
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
`

export default function LandfillEnvironment(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/Landfills"title="Environment"></Menu>
            </div>
            <div className="container">
                <Header left="10px" text="How is plastic in landfill affecting the Environment?"></Header>
            </div>
            <div id="box" className="container">
                <Header text="Toxins/Leachate" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="Leachate is a liquid formed when water is filtered through waste decomposed from landfills. Wastes contain toxic substances."></Bodytext>
                <MovingImage2 image="/LandfillEnv.svg"/>
                <Bodytext marginbottom="20px;"Text="Electronic waste contains mercury, cadmium, PVC, acids, lead, and more."></Bodytext>
                <div className="row">
                    <Didyouknow headercolor="#FFE082" backcolor="#FFF7DE" informationtext="These substances are polluting our land and groundwater!"></Didyouknow>
                    <img className="moving" id="image" src="/ground.svg" width="100px"></img>
                </div>
                <div className="grid">
                    <Start routeTo="/LandfillQuiz" spacing="2px" text="Take Quiz!" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                    <Start routeTo="/MoreLandfill" spacing="2px" text="How to help" fontsize="16px" width="166px" padding="0px" height="52px" marginleft="7px"></Start>
                </div>
            </div>
            <div>
                <BottomBar routeTo1="/Landfills"></BottomBar>
            </div>
        </Holder>
    )
}