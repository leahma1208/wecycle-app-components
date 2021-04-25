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

export default function UrbanCities() {
    return <Holder>
        <div>
            <Menu routeTo="/regions" title="Urban Cities"></Menu>
        </div>
        
        <div className ="container1">
            <Header left="5px" text="How does plastic in Urban Cities affect..."/>
        </div>
        <div className="container2">
            <RegionButton routeTo="/UrbanPeople" text="People" bgcolor="#ACDBCB" ellipsecolor="#C0ECDD" src="/people.svg"/>
            <RegionButton routeTo="/UrbanEnvironment" text="Environment" bgcolor="#88C3AF" ellipsecolor="#C0ECDD" src="/enviro.svg" width="93px" height="93px"/>
            <RegionButton routeTo="/UrbanAnimals" text="Animals" bgcolor="#66B69B" ellipsecolor="#C0ECDD" src="/koala.svg" width="104px" height="104px" />
        </div>
        <div>
            <BottomBar routeTo1="/regions"></BottomBar>
        </div>

    </Holder>
}