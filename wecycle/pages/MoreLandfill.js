import Head from 'next/head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import RegionButton from '../comps/RegionButton';
import React, {useState} from 'react';

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
            <Menu routeTo="/Landfills" title="More"/>
        </div>
        
        <div className="container1">
            <RegionButton routeTo="/LandfillQuiz" bgcolor="#FEE9A8" ellipsecolor="#FFF7DE" text="Quiz time"/>
            <RegionButton routeTo="/HelpLandfill" text="How to help" bgcolor="#FFE28A" ellipsecolor="#FFF7DE" src="/howToHelp.svg" width="93px" height="93px"/>
            <RegionButton routeTo="/ProgramsLandfill" text="Programs" bgcolor="#F6D56E" ellipsecolor="#FFF7DE" src="/Programs.svg" width="104px" height="104px" />
        </div>

    </Holder>
}