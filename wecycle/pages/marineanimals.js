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

export default function MarineAnimals(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/marineenviro"title="Animals"></Menu>
            </div>
            <div className="container">
                <Header text="How is plastic in Oceans affecting animals?"></Header>
            </div>
            <div id="box" className="container">
                <Header text="Sea Turtles" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="A sea turtle swims through the water and spots a white blob floating near the surface. “Yum!” it thinks. “A jellyfish!” Chasing after its dinner, the turtle swallows the item. But the floating blob isn’t a jelly—it’s a plastic bag that could make the sea turtle sick. "></Bodytext>
                <div className="row">
                    <Didyouknow informationtext="This sea creature isn’t alone: Over 700 species of marine animals have been reported to have eaten or been entangled in plastic."></Didyouknow>
                    <img id="image" src="/seaturtle.svg" width="150px"></img>
                </div>
                <Start text="What's next?" fontsize="18px" width="200px"></Start>


            </div>

        </Holder>
    )
}