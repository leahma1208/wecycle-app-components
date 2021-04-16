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

export default function Regions() {
    return <Holder>
        <div>
            <Menu></Menu>
        </div>
        
        <div className ="container1">
            <Header text="How is plastic Affecting Different Regions?"/>
        </div>
        <div className="container1">
            <RegionButton text="Marine"/>
            <RegionButton text="Urban Cities" bgcolor="#AFDDCD" ellipsecolor="#C0ECDD" src="/UrbanCity.svg" width="93px" height="93px"/>
            <RegionButton text="Landfills" bgcolor="#FFEAAD" ellipsecolor="#FFFBF0" src="/Landfills.svg" width="104px" height="104px" />
        </div>

    </Holder>
}