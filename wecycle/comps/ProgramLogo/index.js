import React from 'react';
import styled from 'styled-components';

const ProgramCont = styled.div`
    
`;

const ProgramEllipse = styled.div`
    border-radius: 50%;
    width: 130px;
    height: 130px;
    background-color:${props=>props.circlebg};
    display:flex;
`;

const ProLogoImg = styled.img`
    align-items: center;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`;


const ProgramLogo = ({
    circlebg="#C0ECDD",
    src="/Terracycle.svg"
}) => {
    return <ProgramCont>
        <ProgramEllipse circlebg={circlebg}>
            <ProLogoImg src={src}/>
        </ProgramEllipse>
    </ProgramCont>
}

export default ProgramLogo;