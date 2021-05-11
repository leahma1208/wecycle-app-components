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
    align-items:center;
    width:100%;


    .bottom {
        display:flex;
        justify-content:center;
        align-items:center;
    }
}

#box {
    display:flex;
    height: auto;
    width:100%;
    background-color: #ADBAFF;
    border-radius: 5rem 5rem 0rem 0rem;
    margin:0px;
}

.row {
    display:flex;
    justify-content:center;
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

export default function MarineAnimals(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/Marine" title="Animals"></Menu>
            </div>
            <div className="container">
                <Header left="5px" text="How is plastic in Oceans affecting animals?"></Header>
            </div>
            <div id="box" className="container">
                <Header text="Sea Turtles" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="A sea turtle swims through the water and spots a white blob floating near the surface. “Yum!” it thinks."></Bodytext>
                <MovingImage2 image="/ocean-animals-1.svg"/>

                <Bodytext marginbottom="20px;"Text="“A jellyfish!” Chasing after its dinner, the turtle swallows the item. But the floating blob isn’t a jelly—it’s a plastic bag that could make the sea turtle sick."></Bodytext>
               <div className="flex">
                <MovingImage2 image="/ocean-animals-2.svg"/>
                <MovingImage2 image="/ocean-animals-2-2.svg"/>
                </div>
                
                
                <div className="row">
                    <Didyouknow informationtext="This sea creature isn’t alone: Over 700 species of marine animals have been reported to have eaten or been entangled in plastic."></Didyouknow>
                    <img className="moving" id="image" src="/ocean-animals-3.svg" width="100px"></img>
                </div>
                <div className="grid">
                    <Start routeTo="/marinequiz" spacing="2px" text="Take Quiz!" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                    <Start routeTo="/More" spacing="2px" text="How to help" fontsize="16px" width="166px" padding="0px" height="52px" marginleft="7px"></Start>
                </div>
                <div className="bottom">
                    <BottomBar routeTo1="/Marine"></BottomBar>
                </div>

            </div>

        </Holder>
    )
}