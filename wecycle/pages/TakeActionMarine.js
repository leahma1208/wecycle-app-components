// import Head from 'next/.head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import Bodytext from '../comps/Bodytext';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';
import StudyOthers from '../comps/StudyOthers'
import React, {useState} from 'react';
import Marinequiz from '../comps/Urbanquiz'
import BottomBar from '../comps/BottomBar';
import TakeAction from '../comps/TakeAction'

const Holder = styled.div `
.bottom {
    display:flex;
    justify-content:center;
    align-items:center;
}
`;
const BG = styled.div`
background-color:#ADBAFF;

`;

const HeaderCont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
`;

const Linecont = styled.div`
display:flex;
justify-content:center;
align-items:center;
color:#5769DF;
`;

const Text = styled.div`
margin-top:45px;
margin-bottom:35px;
display:flex;
justify-content:center;
align-items:center;
color:#393939;
text-align: center;
`;

const ButtonCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-bottom:70px;
`;

export default function MarineAnimals(){
    return (
        <Holder>
            <div>
            <Menu routeTo="/Marine" title="Take Action"></Menu>
            </div>
            <BG>
                <HeaderCont>
                    <Header margintop="85px" left="5px" text="You are now ready for the real world!"></Header>
                    <Bodytext marginbottom="20px;"Text="Find opportunities to make an impact on our world today."></Bodytext>
                </HeaderCont>
                <TakeAction routeTo="/Programs" />
                <Linecont>
                    <hr width="138px" color="#5769DF"/>
                    <p>or</p>
                    <hr width="138px" color="#5769DF"/>
                </Linecont>
                <Text>
                Do you want to earn <br/> more badges?
                </Text>
                <ButtonCont>
                    <Start text="Go back to regions" fontsize="16px" width="300px" height="45px" marginright="7px" spacing="2px" padding="10px" routeTo="/regions" />
                </ButtonCont>
                <div className="bottom">
                    <BottomBar routeTo1="/MarineCorrectAnswer"></BottomBar>
                </div>
            </BG>
        </Holder>
    )
}