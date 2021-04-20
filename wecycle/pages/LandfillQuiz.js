// import Head from 'next/.head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import Bodytext from '../comps/Bodytext';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';
import StudyOthers from '../comps/StudyOthers'
import React, {useState} from 'react';
import Marinequiz from '../comps/Landfillquiz';
import Flag from '../comps/Flags'

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
`;

const StudyMore = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin-right: 2rem;
`;

export default function QuizTimeUrban({
    background="#ADBAFF"
}){

    const [texts, setTexts] = useState("");
    const [title, setTitle] = useState("Study Other Regions");
    const [source , setSource] = useState("/ForwardButton.svg");
    const [route, setRoute] = useState("/regions")
    const [backgrounds, setBackground] = useState("#FFEAAD")



    const HandleGarbage = () => {
        setTexts("Incorrect! Globally, more than 240 wildlife species, are known to have ingested plastic.")
        setTitle("Try Again")
        setSource("/reload.svg")
        setRoute("/marinequiz")
        setBackground("#F66646")
    }
    const HandleRecycle = ({}) => {
        setTexts("Correct!")
        setTitle("Study Other Regions")
        setSource("/ForwardButton.svg")
        setRoute("/regions")
        setBackground("#4ACE8F")
    }
    const HandleCompost = () => {
        setTexts("Incorrect! Globally, more than 240 wildlife species, are known to have ingested plastic.")
        setTitle("Try Again")
        setSource("/reload.svg")
        setRoute("/marinequiz")
        setBackground("#F66646")
    }
    return (
        <QuizCont>
            <Menu routeTo="/MoreLandfill" title="Quiz Time" borderbottom="none"></Menu>
            <Box background={backgrounds}>
            <Titleholder>
                <Header text="Roughly how big do you think Canada’s landfill is?" />
                <Bodytext 
                Text={texts}
                textwidth="250px"/>

            </Titleholder>
            </Box>

            <ButtonHolder>
                <Marinequiz
                onGarbageClick={HandleGarbage}
                onRecycleClick={HandleRecycle}
                onCompostClick={HandleCompost}
                />
            </ButtonHolder>

            <StudyMore>
                <StudyOthers
                title={title}
                source={source}
                routeTo={route}
                />
            </StudyMore>
        </QuizCont>
    )
}