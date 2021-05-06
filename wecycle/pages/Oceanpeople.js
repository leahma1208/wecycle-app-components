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
    height:auto;
    width:100%;
    background-color: #ADBAFF;
    border-radius: 5rem 5rem 0rem 0rem;
    margin-top: 20px;
}

.row {
    display:flex;
    justify-content:space-evenly;
    width:100%;
    margin-bottom: 30px;
    margin-top: 30px;
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

.flex{
    display:flex;
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

export default function OceanPeople(){
    return (
        <Holder>
            <div>
                <Menu routeTo="Marine"title="People"></Menu>
            </div>
            <div className="container">
                <Header left="5px" text="How are plastics in oceans affecting people?"></Header>
            </div>
            <div id="box" className="container">
                <Header text="Plastic affecting human health" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="There are different types of ways that plastic is dangerous for humans. "></Bodytext>
                <MovingImage2 image="/ocean-people-1.svg"/>

                <Bodytext Text="Direct toxicity from plastics comes from lead, cadmium, and mercury. These toxins have also been found in many fish in the ocean, which is very dangerous for humans. "></Bodytext>
                <MovingImage2 image="/ocean-people-2.svg"/>

                <Bodytext Text="Diethylhexyl phthalate contained in some plastics, is a toxic carcinogen, meaning that it  has the ability to cause cancer.  "></Bodytext>
               
                <MovingImage2 image="/ocean-people-3.svg"/>
                
                
                
                <div className="row">
                    <Didyouknow informationtext="Other toxins in plastics are directly linked to cancers, birth defects, immune system problems, and childhood developmental issues."></Didyouknow>
                    <img className="moving" id="image" src="/ocean-people-4.svg" width="90px"></img>
                </div>
                <div className="grid">
                    <Start routeTo="/marinequiz" spacing="2px" text="Take Quiz!" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                    <Start routeTo="/Help" spacing="2px" text="How to help" fontsize="16px" width="166px" padding="0px" height="52px" marginleft="7px"></Start>
                </div>
            </div>
            <div>
                <BottomBar routeTo1="/Marine"></BottomBar>
            </div>

        </Holder>
    )
}