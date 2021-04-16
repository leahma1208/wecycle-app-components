import Head from 'next/head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import RegionButton from '../comps/RegionButton';

const Holder = styled.div `
.container1 {
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
};




`;

export default function Marine() {
    return <Holder>
        <div>
            <Menu title="Marine"></Menu>
        </div>
        
        <div className ="container1">
            <Header text="How does plastic in oceans affect..."/>
        </div>
        <div className="container1">
            <RegionButton text="People" bgcolor="#ADBAFF" elipsecolor="#E1E6FF" src="/people.svg"/>
            <RegionButton text="Environment" bgcolor="#7E93FF" ellipsecolor="#E1E6FF" src="/enviro.svg" width="93px" height="93px"/>
            <RegionButton text="Animals" bgcolor="#7087FF" ellipsecolor="#E1E6FF" src="/marineanimal.svg" width="104px" height="104px" />
        </div>

    </Holder>
}