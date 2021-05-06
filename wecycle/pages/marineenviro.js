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
display:flex;
flex-direction:column;

.container {
    display:flex;
    justify-content:center;
    align-items:center;
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
    margin-top: 30px;
    margin-bottom: 30px;
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
}

#bar-holder {
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:red;
}

@keyframes slideIn {
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(15deg);
    }
    100%{
        transform: rotate(0deg);
    }
}

`

export default function MarineEnviro(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/Marine" title="Environment"></Menu>
            </div>
            <div className="container">
                <Header text="How is plastic in Oceans affecting the environment?"></Header>
            </div>
            <div id="box" className="container">
                <Header text="Where does this plastic go?" margintop="50px;"></Header>
                <Bodytext Text="How does it get into the sea? Plastic left on the ground as litter often blows into creeks and rivers, eventually ending up in the ocean. "></Bodytext>
                <MovingImage2 image="/ocean-enviro-1.svg"/>

                <Bodytext marginbottom="15px;"Text="And because plastic trash is different from other types of waste—it doesn’t decompose back into nature like an apple core or a piece of paper—it stays in the ocean forever. "></Bodytext>
                <MovingImage2 image="/ocean-enviro-2.svg"/>
                

                <div className="row">
                    <Didyouknow informationtext="Scientists think that 8.8 million tons of plastic winds up in the ocean every year—that’s as if you stacked up five plastic grocery bags full of trash on top of each other on every foot of coastline in the world."></Didyouknow>
                    <img className="moving" id="image" src="/envirofish.svg" width="120px"></img>
                </div>
                <div className="grid">
                    <Start routeTo="/marinequiz" spacing="2px" text="Take Quiz!" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                    <Start routeTo="/Help" spacing="2px" text="How to help" fontsize="16px" width="166px" padding="0px" height="52px" marginleft="7px"></Start>
                </div>
                <div id="bar-holder">
                    <BottomBar routeTo1="/Marine"></BottomBar>
                </div>

            </div>

        </Holder>
    )
}