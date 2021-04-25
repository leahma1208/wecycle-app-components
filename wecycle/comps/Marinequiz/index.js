import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import Start from '../Start'
import QuizButton from '../QuizButton';

const Container = styled.div`
    background-color: ${props=>props.background};
    justify-content:center;
    width:${props=>props.width};
    border-radius:${props=>props.radius};
    margin-top:${props=>props.margintop};
    margin-bottom:${props=>props.marginbottom};

    #wrong.onclick{
        animation: shake 0.2s;
        animation-iteration-count: 1;
    }
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

`
const Button = styled.div`
    display:flex;
    flex-direction:column;

`

const Text = styled.p `
    margin:0.5rem;
    color:white;
    display:flex;
    font-family: ${props=>props.fontfamily};
    letter-spacing: ${props=>props.spacing};
    font-size: ${props=>props.fontsize};
    justify-content:center;
    align-items:center;
`



const Marinequiz = ({
    onGarbageClick=()=>{},
    onRecycleClick=()=>{},
    onCompostClick=()=>{},
})=>{
    return (
        <Container>
                <QuizButton id="wrong" onClick={onGarbageClick}  text="Garbage" width="15rem" fontsize="19px" spacing="0.15rem" margintop="0" marginbottom="1.5rem"/>
                <QuizButton onClick={onRecycleClick}  text="Recycle" width="15rem" fontsize="19px" spacing="0.15rem" margintop="0" marginbottom="1.5rem"/>
                <QuizButton id="wrong" onClick={onCompostClick}  text="Compost" width="15rem" fontsize="19px" spacing="0.15rem" margintop="0" marginbottom="1.5rem"/>
            
        </Container>
    )
}

export default Marinequiz;

