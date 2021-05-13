// import Head from 'next/.head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import Bodytext from '../comps/Bodytext';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';
import StudyOthers from '../comps/StudyOthers'
import React, {useState} from 'react';
import Marinequiz from '../comps/Marinequiz'
import { flushSync } from 'react-dom';
import BottomBar from '../comps/BottomBar';

const QuizCont = styled.div`


`;

const Box = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:100%;
background-color:${props=>props.background};
height:30rem;
border-radius: 0rem 0rem 5rem 5rem;
`;

const Titleholder = styled.div`
        display:flex;
        flex-direction:column;
        width:100%;
        align-items: center;
    `;

const Quizimg = styled.img`
    width:150px;
    height:150px;
`;

const ButtonHolder = styled.div`
display:flex;
flex-direction:column;
align-items:center;
position:relative;
bottom: 40px;
font-weight: 700;
`;

const StudyMore = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin-right: 2rem;
`;

const Animation = styled.script`
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
`;

export default function QuizTime({
    background="#ADBAFF"
}){

    const [texts, setTexts] = useState("Click on the right waste bin to help Wendy!");
    const [source , setSource] = useState("/ForwardButton.svg");
    const [route, setRoute] = useState("/regions")
    // const [backgrounds, setBackground] = useState("#ADBAFF")

    return (
        <QuizCont>
            <Menu routeTo="More" title="Quiz Time" borderbottom="none"></Menu>
            <Box id="box" background="#ADBAFF">
            <Titleholder>
                <Header text="Congratulations! You earned a marine badge" />
                <Bodytext 
                Text="Plastic cutlery, cups, and water bottles go in the recycling bin."
                textwidth="250px"/>
                <Quizimg src="/marineBadge.svg"/>
            </Titleholder>
            </Box>

            <ButtonHolder>
                <Marinequiz
                />
            </ButtonHolder>

            <StudyMore>
                <StudyOthers
                source={source}
                routeTo="TakeActionMarine"
                />
            </StudyMore>
            <BottomBar routeTo1="/marinequiz"></BottomBar>
        </QuizCont>
    )
}