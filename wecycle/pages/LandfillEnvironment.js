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


`

export default function LandfillEnvironment(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/Landfills"title="Environment"></Menu>
            </div>
            <div className="container">
                <Header text="How is plastic in landfill affecting the Environment?"></Header>
            </div>
            <div id="box" className="container">
                <Header text="Toxins/Leachate" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="Leachate is a liquid formed when water is filtered through waste decomposed from landfills. Wastes contain toxic substances. Electronic waste contains mercury, cadmium, PVC, acids, lead, and more."></Bodytext>
                <div className="row">
                    <Didyouknow headercolor="#FFE082" backcolor="#FFF7DE" informationtext="These substances are polluting our land and groundwater!"></Didyouknow>
                    <img id="image" src="/ground.svg" width="150px"></img>
                </div>
                <Start routeTo="/MoreLandfill" text="What's next?" fontsize="18px" width="200px"></Start>


            </div>

        </Holder>
    )
}