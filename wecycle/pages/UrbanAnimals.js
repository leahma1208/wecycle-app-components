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
.grid {
    display:grid;
    grid-template-columns: 1fr 1fr;
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

export default function UrbanAnimals(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/UrbanCities"title="Animals"></Menu>
            </div>
            <div className="container">
                <Header text="How is plastic in urban cities Affecting animals?"></Header>
            </div>
            <div id="box" className="container">
                <Header text="Plastic waste in our ecosystem" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="Plastic waste contaminates all major ecosystems on the planet, with concern increasing about its potential impacts on wildlife and human health, as smaller and more widespread plastic particles are identified in both the natural and built environment. Elsewhere, a flamingo strangles itself on a bag, unable to twist its way out of the entangling plastic. A platypus suffers deep cuts from a plastic bag entwined around its body, while a pelican dies after consuming plastic bags while diving for fish."></Bodytext>
                <div className="row">
                    <Didyouknow headercolor="#87CCB5" backcolor="#C0ECDD" informationtext="Microplastics can also interact with soil fauna, affecting their health and soil functions. “Earthworms, for example, make their burrows differently when microplastics are present in the soil, affecting the earthworm's fitness and the soil condition,” says an article in Science Daily about the research."></Didyouknow>
                    <img className="moving" id="image" src="/ecosystem.svg" width="150px"></img>
                </div>
                <div className="grid">
                    <Start routeTo="/UrbanQuiz" text="Take Quiz!" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                    <Start routeTo="/HelpUrban" text="How to help" fontsize="16px" width="166px" padding="0px" height="52px" marginleft="7px"></Start>
                </div>


            </div>

        </Holder>
    )
}