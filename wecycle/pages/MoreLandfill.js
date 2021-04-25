import Head from 'next/head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import RegionButton from '../comps/RegionButton';
import React, {useState} from 'react';
import BottomBar from '../comps/BottomBar';

const Holder = styled.div `
.container1 {
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
};


`;

export default function MoreLandfill() {

    return <Holder>
        <div>
            <Menu routeTo="/Landfills" title="How to Help"/>
        </div>
        
        <div className="container1">
           
            <RegionButton routeTo="/HelpLandfill" text="How to Recycle" bgcolor="#FFE28A" ellipsecolor="#FFF7DE" src="/howToHelp.svg" width="93px" height="93px"/>
            <RegionButton routeTo="/ProgramsLandfill" text="Volunteer" bgcolor="#F6D56E" ellipsecolor="#FFF7DE" src="/Programs.svg" width="104px" height="104px" />
        </div>
        <div>
            <BottomBar routeTo1="/LandfillAnimals"></BottomBar>
        </div>

    </Holder>
}