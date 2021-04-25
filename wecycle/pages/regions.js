import Head from 'next/head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import RegionButton from '../comps/RegionButton';
import BottomBar from '../comps/BottomBar';
import React, {useState} from 'react';

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
    padding-bottom: 5rem;
};



`;

export default function Regions() {

    return <Holder>
        <div>
            <Menu routeTo="/Home" title="Regions"/>
        </div>
        
        <div className ="container1">
            <Header left="5px"text="How is plastic Affecting Different Regions?"/>
        </div>
        <div className="container2">
            <RegionButton routeTo="/Marine" text="Marine"/>
            <RegionButton routeTo="/UrbanCities" text="Urban Cities" bgcolor="#AFDDCD" ellipsecolor="#C0ECDD" src="/UrbanCity.svg" width="93px" height="93px"/>
            <RegionButton routeTo="/Landfills" text="Landfills" bgcolor="#FFEAAD" ellipsecolor="#FFFBF0" src="/Landfills.svg" width="104px" height="104px" />
        </div>
        <div>
            <BottomBar routeTo1="/Home"></BottomBar>
        </div>

    </Holder>
}