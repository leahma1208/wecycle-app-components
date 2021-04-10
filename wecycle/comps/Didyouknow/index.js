import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    background-color: blue;
    justify-content:left;
    width:12em;
    border-radius:19px;
    background-color: ${props=>props.backcolor};
    margin-left:30px;
`
const Holder = styled.div `
    display:flex;
    flex-direction:column;
    width:100%;
`

const HeaderHolder = styled.div `
    background-color:red;
    margin:15px;
    background-color:${props=>props.headercolor};
    border-radius:6px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
`

const InformationHolder = styled.div `
    margin-left:5px;
    paragraph-width:15em;
    padding:0px 10px;
    
`

const Didyouknow = ({
    informationtext="Sugar plum carrot cake caramels jelly beans croissant cheesecake tart bonbon. Sugar plum carrot cake caramels jelly beans croissant ",
    backcolor= "#E1E6FF",
    headercolor= "#ADBAFF",

}) => {
    return (
        <Container backcolor={backcolor}>
            <Holder>
                <HeaderHolder headercolor={headercolor}> 
                    <h4>DID YOU KNOW?</h4>
                </HeaderHolder>
                <InformationHolder>
                    <p>{informationtext}</p>
                </InformationHolder>
            </Holder>
        </Container>
    )
}

export default Didyouknow;