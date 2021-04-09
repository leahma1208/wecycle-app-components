import Head from 'next/head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';
import Tutorial from '../comps/Tutorial';
import TutorialInfo from '../comps/TutorialInfo';
import RegionButton from '../comps/RegionButton';
import ImgText from '../comps/ImgText';
import Header from '../comps/Header';
import ProgramLogo from '../comps/ProgramLogo';

const Holder = styled.div `
.container {
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
};

.top{
    height:23rem;
}

.top img{
    width:15rem;
}


.bottom {
    height: 35rem;
    background-color: #5769DF;
    border-radius: 7rem 7rem 0rem 0rem;
}

`;

export default function Regions() {
    return <Holder>
        <div className="top container">
            <img src="/Logo.png"></img>
        </div>
        <div className="bottom container">
            <Header text="Welcome!" weight="regular" color="white" fontfamily="Fredoka One" fontsize="30px"/>
            <Header text="Let's start learning" weight="regular" color="white" fontfamily="Fredoka One" fontsize="30px"/>
            <Start/>
            <Tutorial/>
            <TutorialInfo/>
        </div>
        

    </Holder>
}