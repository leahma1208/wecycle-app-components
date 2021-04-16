// import Head from 'next/.head';
import styled from 'styled-components';
import Menu from '../comps/Menu';
import Header from '../comps/Header';
import Bodytext from '../comps/Bodytext';
import Didyouknow from '../comps/Didyouknow';
import Start from '../comps/Start';
import StudyOthers from '../comps/StudyOthers'

const QuizCont = styled.div`


`;

const Box = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:100%;
background-color:#ADBAFF;
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
bottom: 20px;
`;

const StudyMore = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin-right: 2rem;
`;

export default function QuizTime(){
    return (
        <QuizCont>
            <Menu title="Quiz Time" borderbottom="none"></Menu>
            <Box>
            <Titleholder>
                <Header text="Wendy the whale might mistakenly eat the plastic debris!" />
                <Bodytext Text="Click on the right waste bin
                 to help Wendy!" textwidth="250px"/>
                 <Quizimg src="/marinequiz.svg"/>
            </Titleholder>
            </Box>

            <ButtonHolder>
                <Start text="Garbage" width="15rem" fontsize="19px" spacing="0.15rem" margintop="0" marginbottom="1.5rem"/>
                <Start text="Recycle" width="15rem" fontsize="19px" spacing="0.15rem" margintop="0" marginbottom="1.5rem"/>
                <Start text="Compost" width="15rem" fontsize="19px" spacing="0.15rem" margintop="0" marginbottom="1.5rem"/>
            </ButtonHolder>

            <StudyMore>
                <StudyOthers/>
            </StudyMore>
        </QuizCont>
    )
}