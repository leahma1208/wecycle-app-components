import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'

const BarCont = styled.div`
   display: flex;
   justify-content: center;
   bottom: 0;
   width:100%;
   position:fixed;
   z-index: 20000;
`
const BarNav = styled.div`
    bottom:0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FFF;
    border-top: 1px solid #D9D9D9;
    min-width: 100%;
    height:80px;
    font-family: 'Poppins', sans-serif;
    color: #3D3E46;
    font-size: 16px;
    border-radius: 2rem 2rem 0rem 0rem;

`
const BarBack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 50px;
`

const BarHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 35px;
`

const BarRegions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

const BarIcon =styled.img`
    width: 32px;
    height: 30px;
    padding: 4px;
`

const BottomBar = ({
    routeTo1='/Home',
    routeTo2='/Home',
    routeTo3='/regions',

}) => {
    const router = useRouter();
    return <BarCont>
        <BarNav>
            <BarBack onClick={()=>router.push(routeTo1)}>
                <BarIcon src='/backicon.png'></BarIcon>
                Back
            </BarBack>
            <BarHome onClick={()=>router.push(routeTo2)}>
                <BarIcon src='/home.svg'></BarIcon>
                Home
            </BarHome>
            <BarRegions onClick={()=>router.push(routeTo3)}>
                <BarIcon src='/earth.svg'></BarIcon>
                Regions
            </BarRegions>
        </BarNav>
    </BarCont>
}

export default BottomBar