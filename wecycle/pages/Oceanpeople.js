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
    background-color: #ADBAFF;
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

export default function OceanPeople(){
    return (
        <Holder>
            <div>
                <Menu routeTo="Marine"title="People"></Menu>
            </div>
            <div className="container">
                <Header text="How are plastics in oceans affecting people?"></Header>
            </div>
            <div id="box" className="container">
                <Header text="Plastic affecting human health" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="There are different types of ways that plastic is dangerous for humans. Direct toxicity from plastics comes from lead, cadmium, and mercury. These toxins have also been found in many fish in the ocean, which is very dangerous for humans. Diethylhexyl phthalate contained in some plastics, is a toxic carcinogen, meaning that it  has the ability to cause cancer.  "></Bodytext>
                <div className="row">
                    <Didyouknow informationtext="Other toxins in plastics are directly linked to cancers, birth defects, immune system problems, and childhood developmental issues."></Didyouknow>
                    <img id="image" src="/microplastic.svg" width="150px"></img>
                </div>
                <Start routeTo="/marineenviro" text="What's next?" fontsize="18px" width="200px"></Start>


            </div>

        </Holder>
    )
}