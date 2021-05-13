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

export default function QuizTimeUrban({
    background="#ADBAFF"
}){

    const [texts, setTexts] = useState("");
    const [source , setSource] = useState("/ForwardButton.svg");
    const [route, setRoute] = useState("/regions")
    // const [backgrounds, setBackground] = useState("#AFDDCE")


    return (
        <QuizCont>
            <Menu routeTo="/MoreUrban" title="Quiz Time" borderbottom="none"></Menu>
            <Box id="box" background="#AFDDCE">
            <Titleholder>
                <Header text="Congratulations! You earned a urban cities badge" />
                <Bodytext 
                Text="Air pollution kills about 7 million people each year."
                textwidth="250px"/>
                <Quizimg src="/cityBadge.svg"/>
            </Titleholder>
            </Box>

            <ButtonHolder>
                <Marinequiz
                />
            </ButtonHolder>

            <StudyMore>
                <StudyOthers
                source={source}
                routeTo="TakeActionCity"
                />
            </StudyMore>
            <BottomBar routeTo1="/UrbanQuiz"></BottomBar>
        </QuizCont>
    )
}