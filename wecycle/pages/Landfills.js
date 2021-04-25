import Head from 'next/head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import RegionButton from '../comps/RegionButton';
import BottomBar from '../comps/BottomBar';

const Holder = styled.div `
.container1 {
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
};
.container2 {
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding-bottom: 7rem;
};



`;

export default function Landfills() {
    return <Holder>
        <div>
            <Menu routeTo="/regions" title="Landfills"></Menu>
        </div>
        
        <div className ="container1">
            <Header left="8px" text="How does plastic in Landfills affect..."/>
        </div>
        <div className="container2">
            <RegionButton routeTo="/Landfillpeople" text="People" bgcolor="#FEE9A8" ellipsecolor="#FFF7DE" src="/people.svg"/>
            <RegionButton routeTo="/LandfillEnvironment" text="Environment" bgcolor="#FFE28A" ellipsecolor="#FFF7DE" src="/enviro.svg" width="93px" height="93px"/>
            <RegionButton routeTo="/LandfillAnimals" text="Animals" bgcolor="#F6D56E" ellipsecolor="#FFF7DE" src="/bee.svg" width="104px" height="104px" />
        </div>
        <div>
            <BottomBar routeTo1="/regions"></BottomBar>
        </div>
    </Holder>
}