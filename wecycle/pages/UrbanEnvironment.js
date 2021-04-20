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
    background-color: #AFDDCD;
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
                    <img id="image" src="/garden.svg" width="150px"></img>
                </div>
                <Start routeTo="/MoreUrban" text="What's next?" fontsize="18px" width="200px"></Start>


            </div>

        </Holder>
    )
}