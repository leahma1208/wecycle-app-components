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

export default function More() {

    return <Holder>
        <div>
            <Menu routeTo="Marine" title="How to Help"/>
        </div>
        
        <div className="container1">
            
            <RegionButton routeTo="/Help" text="How to Recycle" bgcolor="#8A9DFF" ellipsecolor="#E1E6FF" src="/howToHelp.svg" width="93px" height="93px"/>
            <RegionButton routeTo="/Programs" text="Volunteer" bgcolor="#7086FF" ellipsecolor="#CED6FE" src="/Programs.svg" width="104px" height="104px" />
        </div>
        <div>
            <BottomBar routeTo1="/marineanimals"></BottomBar>
        </div>

    </Holder>
}