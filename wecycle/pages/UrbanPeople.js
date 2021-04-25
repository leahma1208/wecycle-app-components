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

`

export default function UrbanPeople(){
    return (
        <Holder>
            <div>
                <Menu routeTo="/UrbanCities"title="People"></Menu>
            </div>
            <div className="container">
                <Header text="How are plastics in Urban Cities affecting people?"></Header>
            </div>
            <div id="box" className="container">
                <Header text="Plastic in our city" margintop="50px;"></Header>
                <Bodytext marginbottom="20px;"Text="plastic and other packaging waste makes up around 30 percent of total U.S. waste annually. Of the 34.5 million tons of plastic waste generated each year, only 9 percent is recycled, with most of the recyclable waste shipped to other countries for processing. However, the receiving countries often lack the infrastructure to properly process these materials, which leads to U.S. waste ending up in landfills and ecosystems across the globe."></Bodytext>
                <div className="row">
                    <Didyouknow headercolor="#87CCB5" backcolor="#C0ECDD" informationtext="Precycle, based in Brooklyn, is a grocery store where, customers bring their own containers to fill up with any of the available locally-sourced and seasonal bulk products."></Didyouknow>
                    <img id="image" src="/store.svg" width="150px"></img>
                </div>
                <div className="grid">
                    <Start routeTo="/marinequiz" text="Take Quiz!" fontsize="16px" width="166px" padding="10px" height="52px" marginright="7px"></Start>
                    <Start routeTo="/Help" text="How to help" fontsize="16px" width="166px" padding="0px" height="52px" marginleft="7px"></Start>
                </div>


            </div>

        </Holder>
    )
}