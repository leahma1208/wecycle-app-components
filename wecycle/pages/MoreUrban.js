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
            <Menu routeTo="/UrbanCities" title="More"/>
        </div>
        
        <div className="container1">
            <RegionButton routeTo="/UrbanQuiz" bgcolor="#ACDBCB" ellipsecolor="#C0ECDD" text="Quiz time"/>
            <RegionButton routeTo="/HelpUrban" text="How to help" bgcolor="#88C3AF" ellipsecolor="#C0ECDD" src="/howToHelp.svg" width="93px" height="93px"/>
            <RegionButton routeTo="/ProgramsUrban" text="Programs" bgcolor="#66B69B" ellipsecolor="#C0ECDD" src="/Programs.svg" width="104px" height="104px" />
        </div>

    </Holder>
}