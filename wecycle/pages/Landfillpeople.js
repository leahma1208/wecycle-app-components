// import Head from 'next/.head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import Bodytext from '../comps/Bodytext';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';


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
}

`

export default function LandfillPeople(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/Landfills"title="People"></Menu>
            </div>
            <div className="container">
                <Header text="How is plastic in landfills affecting people?"></Header>
            </div>
            <div id="box" className="container">
                <Header text="Landfill sites" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="Each Canadian produces 720 kilograms of waste per year, which is about 10 times more than that produced by six African countries. Surprisingly, our production is 7 percent higher than the per capita production of garbage in the USA, which has caused almost an over-consumer impact."></Bodytext>
                <div className="row">
                    <Didyouknow headercolor="#FFE082" backcolor="#FFF7DE" informationtext="Canada has over 10,000 landfill sites! Averaging around 600 acres each (in comparison, Monaco is  500 acres)"></Didyouknow>
                    <img id="image" src="/garbage.svg" width="150px"></img>
                </div>
                <div className="grid">
                    <Start routeTo="/marinequiz" text="Take Quiz!" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                    <Start routeTo="/Help" text="How to help" fontsize="16px" width="166px" padding="0px" height="52px" marginleft="7px"></Start>
                </div>

            </div>

        </Holder>
    )
}