// import Head from 'next/.head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import Bodytext from '../comps/Bodytext';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';
import BottomBar from '../comps/BottomBar';


const Holder = styled.div `
.container {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center
}

#box {
    height: auto;
    width: 100%;
    background-color: #AFDDCD;
    border-radius: 5rem 5rem 0rem 0rem;
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

export default function UrbanEnvironment(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/UrbanCities"title="Environment"></Menu>
            </div>
            <div className="container">
                <Header text="How is plastic in Urban Cities affecting the Environment?"></Header>
            </div>
            <div id="box" className="container">
                <Header text="Plastic in Gardens" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="Chlorinated plastic can release harmful chemicals into the surrounding soil, which can then seep into groundwater or other surrounding water sources, and also the ecosystem. This can cause a range of potentially harmful effects on the species that drink the water."></Bodytext>
                <div className="row">
                    <Didyouknow headercolor="#87CCB5" backcolor="#C0ECDD" informationtext="Microplastics can also interact with soil fauna, affecting their health and soil functions. “Earthworms, for example, make their burrows differently when microplastics are present in the soil, affecting the earthworm's fitness and the soil condition,” says an article in Science Daily about the research."></Didyouknow>
                    <img className="moving" id="image" src="/garden.svg" width="80px"></img>
                </div>
                <div className="grid">
                    <Start routeTo="/UrbanQuiz" spacing="2px" text="Take Quiz!" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                    <Start routeTo="/MoreUrban" spacing="2px" text="How to help" fontsize="16px" width="166px" padding="0px" height="52px" marginleft="7px"></Start>
                </div>
            </div>
            <div>
            <BottomBar routeTo1="/UrbanCities"></BottomBar>
            </div>
        </Holder>
    )
}