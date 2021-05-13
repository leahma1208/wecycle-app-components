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
import { useRouter } from 'next/router';

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

`;

const ButtonHolder = styled.div`
display:flex;
flex-direction:column;
align-items:center;
position:relative;
bottom: 40px;
margin-bottom:90px;
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
    const [title, setTitle] = useState("Study Other Regions");
    const [source , setSource] = useState("/ForwardButton.svg");
    const [route, setRoute] = useState("/regions")
    const [backgrounds, setBackground] = useState("#ADBAFF")



    const HandleGarbage = () => {
        setTexts("Incorrect! Globally, more than 240 wildlife species, are known to have ingested plastic.")
        setTitle("Try Again")
        setSource("/reload.svg")
        setRoute("/marinequiz")
        setBackground("#F66646")
        shaking()
    }
    const HandleRecycle = ({}) => {
        setTexts("Correct! Plastic cutlery, cups, and water bottles go in the recycling bin.")
        setTitle("Study Other Regions")
        setSource("/ForwardButton.svg")
        setRoute("/MarineCorrectAnswer")
        setBackground("#4ACE8F")
    }
    const HandleCompost = () => {
        setTexts("Incorrect! Globally, more than 240 wildlife species, are known to have ingested plastic.")
        setTitle("Try Again")
        setSource("/reload.svg")
        setRoute("/marinequiz")
        setBackground("#F66646")
        shaking()
    }

    const router = useRouter();

    function shaking()
    {
        document.getElementById('box').style.animation = "shake 0.2s 1";
    }

    return (
        <QuizCont>
            <Menu routeTo="More" title="Quiz Time" borderbottom="none"></Menu>
            <Box id="box" background={backgrounds}>
            <Titleholder>
                <Header text="Wendy the whale might mistakenly eat the plastic debris!" />
                <Bodytext 
                Text={texts}
                textwidth="250px"/>
                <Quizimg src="/marinequiz.svg"/>
            </Titleholder>
            </Box>

            <ButtonHolder>
                <Marinequiz
                onGarbageClick={HandleGarbage}
                onRecycleClick={()=>router.push("/MarineCorrectAnswer")}
                onCompostClick={HandleCompost}
                />
            </ButtonHolder>
            <BottomBar routeTo1="/marineanimals"></BottomBar>
        </QuizCont>
    )
}