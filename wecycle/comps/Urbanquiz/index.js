import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import Start from '../Start'
import QuizButton from '../QuizButton';

const Container = styled.div`
    display:flex;
    background-color: ${props=>props.background};
    justify-content:center;
    width:${props=>props.width};
    border-radius:${props=>props.radius};
    margin-top:${props=>props.margintop};
    margin-bottom:${props=>props.marginbottom};
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


const Urbanquiz = ({
    onGarbageClick=()=>{},
    onRecycleClick=()=>{},
    onCompostClick=()=>{},
})=>{
    return (
        <div>
                <QuizButton onClick={onGarbageClick}  text="2.4 million" width="15rem" fontsize="19px" spacing="0.15rem" margintop="0" marginbottom="1.5rem"/>
                <QuizButton onClick={onRecycleClick}  text="2,400" width="15rem" fontsize="19px" spacing="0.15rem" margintop="0" marginbottom="1.5rem"/>
                <QuizButton onClick={onCompostClick}  text="20,400" width="15rem" fontsize="19px" spacing="0.15rem" margintop="0" marginbottom="1.5rem"/>
            
        </div>
    )
}

export default Urbanquiz;

